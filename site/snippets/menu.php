<nav class="navigation column" role="navigation">
  <ul class="menu">
  	<a href="#intro"><li class="menu-item">This week</li></a>
  	
    <?php foreach($pages->visible() as $item): ?>
      <a href="#<?= $item->uid() ?>">
      	<li class="menu-item"><?= $item->title()->html() ?></li>
      </a>
    </li>
    <?php endforeach ?>
  </ul>
</nav>