-- CreateTable
CREATE TABLE "Hopelessness" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "riskLevel" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Hopelessness_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Hopelessness" ADD CONSTRAINT "Hopelessness_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
