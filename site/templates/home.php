<?php snippet('header') ?>

  <main class="main" role="main">

    <?php snippet('menu') ?>
    
    <section id="intro">
      <div class="weekly">
        <p>what m+ garbage do i have to deal with this week?</p>
        <div class='weekly_us'></div>
        <div class='weekly_eu'></div>
      </div>
      <div class="text">
        <?= $page->text()->kirbytext() ?>
      </div>
    </section>

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
    
    <?php foreach($pages->visible() as $section): ?>

      <section id="<?= $section->uid() ?>">
        <h2><?= $section->title()->html() ?></h2>
        <div class="text"><?= $section->text()->kirbytext() ?></div>
          <?php if($section->affixes()->yaml() != null): ?>

              <h3>LEVEL 4 AFFIXES</h3><span class="title_note">(THESE OCCUR AT +4 KEYSTONES)</span>
              <div class="affix_list">
              <?php foreach($section->affixes()->yaml() as $affix): ?>
                <?php if($affix["level"] == 4): ?>
                  <div class="affix_item">
                    <h4 class='<?= $affix["difficulty"]; ?>'><?= $affix["title"]; ?></h4>
                    <p><?= $affix["description"]; ?></p>
                    <p class="note"><?= $affix["note"]; ?></p>
                  </div>
                <?php endif ?>
              <?php endforeach ?>
              </div>

              <h3>LEVEL 7 AFFIXES</h3><span class="title_note">(THESE OCCUR AT +7 KEYSTONES)</span>
              <div class="affix_list">
              <?php foreach($section->affixes()->yaml() as $affix): ?>
                <?php if($affix["level"] == 7): ?>
                  <div class="affix_item">
                    <h4 class='<?= $affix["difficulty"]; ?>'><?= $affix["title"]; ?></h4>
                    <p><?= $affix["description"]; ?></p>
                    <p class="note"><?= $affix["note"]; ?></p>
                  </div>
                <?php endif ?>
              <?php endforeach ?>
              </div>

              <h3>LEVEL 10 AFFIXES</h3><span class="title_note">(THESE OCCUR AT +10 KEYSTONES)</span>
              <div class="affix_list">
              <?php foreach($section->affixes()->yaml() as $affix): ?>
                <?php if($affix["level"] == 10): ?>
                  <div class="affix_item">
                    <h4 class='<?= $affix["difficulty"]; ?>'><?= $affix["title"]; ?></h4>
                    <p><?= $affix["description"]; ?></p>
                    <p class="note"><?= $affix["note"]; ?></p>
                  </div>
                <?php endif ?>
              <?php endforeach ?>
              </div>

          <?php endif ?>
        <?php //snippet($section->uid(), array('data' => $section)); ?>
      </section>

    <?php endforeach ?>
  
  <?php snippet('footer') ?>

  </main>