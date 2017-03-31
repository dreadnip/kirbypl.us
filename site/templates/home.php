<?php snippet('header') ?>

<main class="main" role="main">

  <?php snippet('menu') ?>

  <!-- The "intro" section - above the fold - Weekly affix display -->
  <section id="intro">

    <div class="weekly">
      <p>what m+ garbage do i have to deal with this week?</p>
      <div class='weekly_us'></div>
      <div class='weekly_eu'></div>
    </div>

    <div class="text">
      <!-- Here we output the "home" text field, can be used for updates, notices, etc.. -->
      <?= $page->text()->kirbytext() ?>
    </div>

  </section>
  
  <!-- The "next" section - right under the fold - Next & week after affix display -->
  <section id="next">

    <div class="nextweek">
      <p>Next week</p>
      <div class='nextweekus'></div>
      <div class='nextweekeu'></div>
    </div>

    <div class="weekafter">
      <p>Week after next</p>
      <div class='weekafternextus'></div>
      <div class='weekafternexteu'></div>
    </div>

  </section>
  
  <!-- Loop over all the pages in the back-end, and create a section for each of them -->
  <!-- This way we get a one-page website, but with different manageable pages in the CMS -->
  <?php foreach($pages->visible() as $section): ?>

    <section id="<?= $section->uid() ?>">
      <h2><?= $section->title()->html() ?></h2>
      <div class="text"><?= $section->text()->kirbytext() ?></div>

      <?php if($section->affixes()->yaml() != null): // If the page has an affixis field, load the affixes snippet ?>

        <?php snippet($section->uid(), array('data' => $section)); ?>

      <?php endif ?>

    </section>

  <?php endforeach ?>
  
  <?php snippet('footer') ?>

</main>