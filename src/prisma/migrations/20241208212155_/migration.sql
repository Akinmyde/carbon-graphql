-- CreateTable
CREATE TABLE "Consumption" (
    "id" SERIAL NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Consumption_pkey" PRIMARY KEY ("id")
);
