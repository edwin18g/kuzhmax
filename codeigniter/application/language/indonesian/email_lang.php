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

$lang ['email_must_be_array'] = 'The email validation method must pass an array.';
$lang ['email_invalid_address'] = 'Invalid email address:% s';
$lang ['email_attachment_missing'] = 'Could not find the following e-mail attachments:% s';
$lang ['email_attachment_unreadable'] = 'Could not open this attachment:% s';
$lang ['email_no_from'] = 'Cannot send headless emails "From".';
$lang ['email_no_recipients'] = 'You must include the recipient: To, CC, or BCC';
$lang ['email_send_failure_phpmail'] = 'Could not send email using PHP mail (). Your server might not be configured to send email using this method. ';
$lang ['email_send_failure_sendmail'] = 'Could not send email using PHP Sendmail. Your server might not be configured to send email using this method. ';
$lang ['email_send_failure_smtp'] = 'Could not send email using PHP SMTP. Your server might not be configured to send email using this method. ';
$lang ['email_sent'] = 'Your message was successfully sent using the following protocol:% s';
$lang ['email_no_socket'] = 'Could not open socket for Sendmail. Please check the settings. ';
$lang ['email_no_hostname'] = 'You did not specify the SMTP host name.';
$lang ['email_smtp_error'] = 'The following SMTP error was encountered:% s';
$lang ['email_no_smtp_unpw'] = 'Error: You must specify an SMTP username and password.';
$lang ['email_failed_smtp_login'] = 'Failed to send the AUTH LOGIN command. Error:% s';
$lang ['email_smtp_auth_un'] = 'Failed to authenticate username. Error:% s';
$lang ['email_smtp_auth_pw'] = 'Failed to authenticate password. Error:% s';
$lang ['email_smtp_data_failure'] = 'Could not send data:% s';
$lang ['email_exit_status'] = 'Status code out:% s';