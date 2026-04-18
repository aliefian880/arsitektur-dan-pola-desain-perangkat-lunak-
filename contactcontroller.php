<?php
require_once __DIR__ . '/../../core/Controller.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once __DIR__ . '/../../vendor/autoload.php';

class ContactController extends Controller {

    public function index() {
        session_start();

        if (!isset($_SESSION['user_id'])) {
            echo "Harus login dulu!";
            exit;
        }

        $this->view('contact/form');
    }

    public function send() {
        session_start();

        if (!isset($_SESSION['user_id'])) {
            echo "Harus login dulu!";
            exit;
        }

        $user_id = $_SESSION['user_id'];
        $name    = $_POST['name'];
        $email   = $_POST['email'];
        $message = $_POST['message'];

        if (!$name || !$email || !$message) {
            echo "Semua field wajib diisi!";
            return;
        }

        $model = $this->model('ContactModel');

        if ($model->saveMessage($user_id, $name, $email, $message)) {

            // CONFIG EMAIL
            $gmail_user = "EMAIL_ADMIN_KAMU@gmail.com";
            $gmail_pass = "APP_PASSWORD_16_DIGIT";
            $admin_email = "aliefiansubagia803@gmail.com";

            $mail = new PHPMailer(true);

            try {
                $mail->isSMTP();
                $mail->Host = "smtp.gmail.com";
                $mail->SMTPAuth = true;
                $mail->Username = $gmail_user;
                $mail->Password = $gmail_pass;
                $mail->SMTPSecure = "tls";
                $mail->Port = 587;

                $mail->setFrom($gmail_user, "Admin Website");
                $mail->addAddress($admin_email);

                $mail->isHTML(true);
                $mail->Subject = "Pesan dari $name";
                $mail->Body = "
                    <h3>Pesan Baru</h3>
                    Nama: $name <br>
                    Email: $email <br>
                    Pesan: $message
                ";

                $mail->send();

                echo "Pesan berhasil dikirim & disimpan!";

            } catch (Exception $e) {
                echo "Pesan tersimpan, tapi email gagal!";
            }

        } else {
            echo "Gagal simpan pesan!";
        }
    }
}