SET check_function_bodies = false;
CREATE TABLE public.tags (
    value text NOT NULL,
    comment text NOT NULL
);
CREATE TABLE public.tickets (
    ticket_id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    name text NOT NULL,
    description text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);
CREATE TABLE public.xref_ticket_tag (
    ticket_id uuid NOT NULL,
    tag_value text NOT NULL
);
ALTER TABLE ONLY public.tags
    ADD CONSTRAINT tags_pkey PRIMARY KEY (value);
ALTER TABLE ONLY public.tickets
    ADD CONSTRAINT tickets_pkey PRIMARY KEY (ticket_id);
ALTER TABLE ONLY public.xref_ticket_tag
    ADD CONSTRAINT xref_ticket_tag_pkey PRIMARY KEY (ticket_id, tag_value);
ALTER TABLE ONLY public.xref_ticket_tag
    ADD CONSTRAINT xref_ticket_tag_tag_value_fkey FOREIGN KEY (tag_value) REFERENCES public.tags(value) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.xref_ticket_tag
    ADD CONSTRAINT xref_ticket_tag_ticket_id_fkey FOREIGN KEY (ticket_id) REFERENCES public.tickets(ticket_id) ON UPDATE RESTRICT ON DELETE RESTRICT;
