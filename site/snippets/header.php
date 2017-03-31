<!doctype html>
<html lang="<?= site()->language() ? site()->language()->code() : 'en' ?>">
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title><?= $site->title()->html() ?> | <?= $page->title()->html() ?></title>
  <meta name="description" content="<?= $site->description()->html() ?>">
	
  <?= css('assets/css/index.css') ?>
  <?= css('https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700,700i|Roboto Mono') ?>
	
  <link rel="icon" href="<?php echo url('assets/images/favicon.ico?v=2') ?>" />
</head>
<body>
