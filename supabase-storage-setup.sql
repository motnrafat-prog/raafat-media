-- Run once in Supabase SQL Editor AFTER the projects/admin_users/is_admin setup succeeded.
-- This bucket is public because portfolio media is intended to be visible to site visitors.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('project-media', 'project-media', true, 52428800,
  array['image/jpeg','image/png','image/webp','image/gif','video/mp4','video/webm','video/quicktime'])
on conflict (id) do update set public = true, file_size_limit = 52428800,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Public can view portfolio media" on storage.objects;
drop policy if exists "Admins can upload portfolio media" on storage.objects;
drop policy if exists "Admins can update portfolio media" on storage.objects;
drop policy if exists "Admins can delete portfolio media" on storage.objects;

create policy "Public can view portfolio media"
on storage.objects for select to anon, authenticated
using (bucket_id = 'project-media');

create policy "Admins can upload portfolio media"
on storage.objects for insert to authenticated
with check (bucket_id = 'project-media' and (select public.is_admin()));

create policy "Admins can update portfolio media"
on storage.objects for update to authenticated
using (bucket_id = 'project-media' and (select public.is_admin()))
with check (bucket_id = 'project-media' and (select public.is_admin()));

create policy "Admins can delete portfolio media"
on storage.objects for delete to authenticated
using (bucket_id = 'project-media' and (select public.is_admin()));
