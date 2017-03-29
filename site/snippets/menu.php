<nav class="navigation column" role="navigation">
  <ul class="menu">
    <?php foreach($pages->visible() as $item): ?>
      <a href="#<?= $item->uid() ?>">
      	<li class="menu-item<?= r($item->isOpen(), ' is-active') ?>"><?= $item->title()->html() ?></li>
      </a>
    </li>
    <?php endforeach ?>
  </ul>
</nav>