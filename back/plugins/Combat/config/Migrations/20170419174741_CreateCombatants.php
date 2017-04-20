<?php
use Migrations\AbstractMigration;

class CreateCombatants extends AbstractMigration
{
    /**
     * Change Method.
     *
     * More information on this method is available here:
     * http://docs.phinx.org/en/latest/migrations.html#the-change-method
     * @return void
     */
    public function change()
    {
        $table = $this->table('combatants');
        $table->addColumn('name', 'string', [
            'default' => null,
            'limit' => 255,
            'null' => false,
        ]);
        $table->addColumn('max_hp', 'integer', [
            'default' => null,
            'null' => false,
        ]);
        $table->addColumn('ini_bonus', 'integer', [
            'default' => null,
            'null' => false,
        ]);
        $table->create();
    }
}
