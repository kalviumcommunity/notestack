import prisma from "./client.js";

// A few authors and notes so the list is not empty on first run.
// `title` is unique — Task 2 (duplicate title -> P2002) relies on that.
const NOTES = [
  "Getting started with React",
  "Prisma include and select",
  "Express error middleware",
  "TanStack Query cache invalidation",
  "Layered architecture basics",
  "PostgreSQL unique constraints",
];

async function main() {
  await prisma.note.deleteMany();
  await prisma.author.deleteMany();

  const ada = await prisma.author.create({ data: { name: "Ada" } });
  const linus = await prisma.author.create({ data: { name: "Linus" } });
  const authors = [ada.id, linus.id];

  const hoursAgo = (n) => new Date(Date.now() - n * 3_600_000);
  const TOTAL = NOTES.length;

  for (let i = 0; i < TOTAL; i++) {
    await prisma.note.create({
      data: {
        title: NOTES[i],
        body: `Notes about: ${NOTES[i]}.`,
        authorId: authors[i % authors.length],
        createdAt: hoursAgo(TOTAL - i), // first oldest ... last newest
      },
    });
  }

  console.log(`Seeded ${TOTAL} notes`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
