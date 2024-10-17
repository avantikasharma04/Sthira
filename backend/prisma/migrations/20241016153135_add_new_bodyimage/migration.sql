-- CreateTable
CREATE TABLE "bodyImageForm" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "satisfaction" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "bodyImageForm_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "bodyImageForm" ADD CONSTRAINT "bodyImageForm_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
