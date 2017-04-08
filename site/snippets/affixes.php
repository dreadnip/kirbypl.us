<h3>+4 AFFIXES</h3>
<div class="affix_list">
<?php foreach($data->affixes()->yaml() as $affix): ?>
  <?php if($affix["level"] == 4): ?>
    <div class="affix_item">
      <h4 class='<?= $affix["difficulty"]; ?>'><?= $affix["title"]; ?></h4>
      <p><?= $affix["description"]; ?></p>
      <p class="note"><?= $affix["note"]; ?></p>
    </div>
  <?php endif ?>
<?php endforeach ?>
</div>

<h3>+7 AFFIXES</h3>
<div class="affix_list">
<?php foreach($data->affixes()->yaml() as $affix): ?>
  <?php if($affix["level"] == 7): ?>
    <div class="affix_item">
      <h4 class='<?= $affix["difficulty"]; ?>'><?= $affix["title"]; ?></h4>
      <p><?= $affix["description"]; ?></p>
      <p class="note"><?= $affix["note"]; ?></p>
    </div>
  <?php endif ?>
<?php endforeach ?>
</div>

<h3>+10 AFFIXES</h3>
<div class="affix_list">
<?php foreach($data->affixes()->yaml() as $affix): ?>
  <?php if($affix["level"] == 10): ?>
    <div class="affix_item">
      <h4 class='<?= $affix["difficulty"]; ?>'><?= $affix["title"]; ?></h4>
      <p><?= $affix["description"]; ?></p>
      <p class="note"><?= $affix["note"]; ?></p>
    </div>
  <?php endif ?>
<?php endforeach ?>
</div>