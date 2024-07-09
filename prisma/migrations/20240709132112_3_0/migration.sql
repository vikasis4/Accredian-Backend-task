-- CreateTable
CREATE TABLE `Refferals` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `course_id` VARCHAR(255) NOT NULL,
    `course_name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `referrer_name` VARCHAR(255) NOT NULL,
    `referrer_email` VARCHAR(191) NOT NULL,
    `referee_name` VARCHAR(255) NOT NULL,
    `referee_email` VARCHAR(191) NOT NULL,
    `course_purchased` BOOLEAN NOT NULL DEFAULT false,
    `coupon_code` INTEGER NOT NULL,

    UNIQUE INDEX `Refferals_referrer_email_key`(`referrer_email`),
    UNIQUE INDEX `Refferals_referee_email_key`(`referee_email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
