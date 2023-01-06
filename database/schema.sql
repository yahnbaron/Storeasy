set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public"."users" (
	"userId" serial NOT NULL,
	"email" TEXT NOT NULL UNIQUE,
	"hashedPassword" TEXT NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."stories" (
	"storyId" serial NOT NULL,
	"title" TEXT NOT NULL,
	"story" TEXT NOT NULL,
	"createdAt" TIMESTAMP NOT NULL,
	"userId" integer NOT NULL,
	CONSTRAINT "stories_pk" PRIMARY KEY ("storyId")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "stories" ADD CONSTRAINT "stories_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
