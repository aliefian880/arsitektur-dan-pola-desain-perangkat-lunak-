<?php
require_once __DIR__ . '/../../core/Model.php';

class ContactModel extends Model {

    public function saveMessage($user_id, $name, $email, $message) {

        $stmt = $this->db->prepare(
            "INSERT INTO pesan_kontak (user_id, nama, email, pesan)
             VALUES (?, ?, ?, ?)"
        );

        $stmt->bind_param("isss", $user_id, $name, $email, $message);

        return $stmt->execute();
    }
}