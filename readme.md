https://www.youtube.com/watch?v=Tj8C5Ys5xxA

CREATE TABLE public."SanPham"
(
    id bigint NOT NULL DEFAULT nextval('"SanPham_id_seq"'::regclass),
    title text COLLATE pg_catalog."default" NOT NULL,
    "desc" text COLLATE pg_catalog."default",
    image text COLLATE pg_catalog."default" NOT NULL,
    video text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "SanPham_pkey" PRIMARY KEY (id),
    CONSTRAINT un_title UNIQUE (title)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."SanPham"
    OWNER to postgres;
