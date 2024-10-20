-- CreateTable
CREATE TABLE "AuditForm" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "risk" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuditForm_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AuditForm" ADD CONSTRAINT "AuditForm_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
