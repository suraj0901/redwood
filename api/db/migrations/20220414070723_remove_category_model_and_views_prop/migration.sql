/*
  Warnings:

  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `categoryName` on the `News` table. All the data in the column will be lost.
  - You are about to drop the column `views` on the `News` table. All the data in the column will be lost.
  - Added the required column `category` to the `News` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Category";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_News" (
    "category" TEXT NOT NULL,
    "title" TEXT NOT NULL PRIMARY KEY,
    "image" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_News" ("body", "date", "image", "title") SELECT "body", "date", "image", "title" FROM "News";
DROP TABLE "News";
ALTER TABLE "new_News" RENAME TO "News";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
