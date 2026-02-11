-- AlterTable
ALTER TABLE "email_open_events" ADD COLUMN "client_ip" TEXT;
ALTER TABLE "email_open_events" ADD COLUMN "user_agent" TEXT;
ALTER TABLE "email_open_events" ADD COLUMN "fbp" TEXT;
ALTER TABLE "email_open_events" ADD COLUMN "fbc" TEXT;
