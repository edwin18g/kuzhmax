<?php
/**
 * System messages translation for CodeIgniter(tm)
 *
 * @author CodeIgniter community
 * @author Mutasim Ridlo, S.Kom
 * @copyright Copyright (c) 2014 - 2017, British Columbia Institute of Technology (http://bcit.ca/)
 * @license http://opensource.org/licenses/MIT MIT License
 * @link https://codeigniter.com
 */
defined('BASEPATH') OR exit('No direct script access allowed');

$lang ['migration_none_found'] = 'No migration was found.';
$lang ['migration_not_found'] = 'No migration can be found with the version number:% s.';
$lang ['migration_sequence_gap'] = 'There is a gap in the order of migration near the version number:% s.';
$lang ['migration_multiple_version'] = 'There are several migrations with the same version number:% s.';
$lang ['migration_class_doesnt_exist'] = 'The migration class "% s" cannot be found.';
$lang ['migration_missing_up_method'] = 'Migration class "% s" lost method "up".';
$lang ['migration_missing_down_method'] = 'The migration class "% s" lost the method "down".';
$lang ['migration_invalid_filename'] = 'Migration "% s" has an invalid file name.';