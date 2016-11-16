<?php if(!defined('IN_GS')){ die('you cannot load this page directly.'); }
/****************************************************
*
* @File: 			template.php
* @Package:		GetSimple
* @Action:		Innovation theme for GetSimple CMS
*
*****************************************************/


# Get this theme's settings based on what was entered within its plugin. 
# This function is in functions.php 
$innov_settings = Innovation_Settings();

# Include the header template
include('header.inc.php'); 
?>
<!-- hero banner -->
<?php get_component('hero-banner'); ?>

<!-- form after header -->
<?php get_component('main-form'); ?>
	
	<section class="main-section main-section_bot">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
            	<?php get_page_content(); ?>
            </div>
        </div>
    </div>
    </section>

<!--туры и направления-->
<?php get_component('tour'); ?>

<!--минимальные цены-->
<?php get_component('minimal-price'); ?>

<!--партнеры-->
<?php get_component('partner'); ?>

<!-- include the footer template -->
<?php include('footer.inc.php'); ?>