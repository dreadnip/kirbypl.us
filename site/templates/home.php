<?php snippet('header') ?>

  <main class="main" role="main">

    <?php snippet('menu') ?>
    
    <section id="intro">
      <div class="text">
        <?= $page->text()->kirbytext() ?>
      </div>
    </section>
    
    <?php foreach($pages->visible() as $section): ?>

      <!-- html for each content section -->
      <section id="<?= $section->uid() ?>">
        <h2><?= $section->title()->html() ?></h2>
        <div class="text"><?= $section->text()->kirbytext() ?></div>

        <?php //snippet($section->uid(), array('data' => $section)); ?>
      </section>

    <?php endforeach ?>

  </main>

<?php snippet('footer') ?>