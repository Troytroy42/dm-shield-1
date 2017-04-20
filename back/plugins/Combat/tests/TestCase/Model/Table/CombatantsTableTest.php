<?php
namespace Combat\Test\TestCase\Model\Table;

use Cake\ORM\TableRegistry;
use Cake\TestSuite\TestCase;
use Combat\Model\Table\CombatantsTable;

/**
 * Combat\Model\Table\CombatantsTable Test Case
 */
class CombatantsTableTest extends TestCase
{

    /**
     * Test subject
     *
     * @var \Combat\Model\Table\CombatantsTable
     */
    public $Combatants;

    /**
     * Fixtures
     *
     * @var array
     */
    public $fixtures = [
        'plugin.combat.combatants'
    ];

    /**
     * setUp method
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $config = TableRegistry::exists('Combatants') ? [] : ['className' => 'Combat\Model\Table\CombatantsTable'];
        $this->Combatants = TableRegistry::get('Combatants', $config);
    }

    /**
     * tearDown method
     *
     * @return void
     */
    public function tearDown()
    {
        unset($this->Combatants);

        parent::tearDown();
    }

    /**
     * Test initialize method
     *
     * @return void
     */
    public function testInitialize()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }

    /**
     * Test validationDefault method
     *
     * @return void
     */
    public function testValidationDefault()
    {
        $this->markTestIncomplete('Not implemented yet.');
    }
}
