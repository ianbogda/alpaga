<?php
$EM_CONF[$_EXTKEY] = array(
    'title' => 'Theme Alpaga',
    'description' => 'Theme ',
    'category' => 'templates',
    'constraints' => array(
        'depends' => array(
            'typo3' => '6.2.15-7.99.99',
            'bootstrap_package' => '6.2.15-7.99.99',
            'news' => '3.2.4',
            'cal' => '1.10.1-1.10.99',
            'indexedsearch' => '6.2.0',
            'cookieconsent2' => '0.2.2',
            'tgm_socialshareprivacy' => '1.0.0',
        ),
        'conflicts' => array(),
    ),
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Yann Bogdanovic',
    'author_email' => 'ianbogda@gmail.com',
    'author_company' => 'private',
    'version' => '6.2.15',
);
?>
