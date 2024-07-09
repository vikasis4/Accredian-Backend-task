/*
  Warnings:

  - A unique constraint covering the columns `[coupon_code]` on the table `Refferals` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Refferals_coupon_code_key` ON `Refferals`(`coupon_code`);
