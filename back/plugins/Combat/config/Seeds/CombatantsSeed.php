<?php
use Migrations\AbstractSeed;

/**
 * Combatants seed.
 */
class CombatantsSeed extends AbstractSeed
{
    /**
     * Run Method.
     *
     * Write your database seeder using this method.
     *
     * More information on writing seeds is available here:
     * http://docs.phinx.org/en/latest/seeding.html
     *
     * @return void
     */
    public function run()
    {
        $data = array(
            array(
                'name' => 'Shadow',
                'max_hp' => 16,
                'ini_bonus' => 2
            ),

        );

        $table = $this->table('combatants');
        $table->insert($data)->save();
    }
}
