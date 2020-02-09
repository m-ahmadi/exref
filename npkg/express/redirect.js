res.redirect([status,] path)

res.redirect('/foo/bar');
res.redirect('http://example.com');
res.redirect(301, 'http://example.com');
res.redirect('../login');
res.redirect('http://google.com');
res.redirect('/admin');
res.redirect('post/new');
res.redirect('..');
res.redirect('back');