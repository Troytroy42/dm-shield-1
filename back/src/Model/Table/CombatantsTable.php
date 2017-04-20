<?php
namespace App\Model\Table;

use Cake\ORM\Query;
use Cake\ORM\RulesChecker;
use Cake\ORM\Table;
use Cake\Validation\Validator;

/**
 * Combatants Model
 *
 * @method \App\Model\Entity\Combatant get($primaryKey, $options = [])
 * @method \App\Model\Entity\Combatant newEntity($data = null, array $options = [])
 * @method \App\Model\Entity\Combatant[] newEntities(array $data, array $options = [])
 * @method \App\Model\Entity\Combatant|bool save(\Cake\Datasource\EntityInterface $entity, $options = [])
 * @method \App\Model\Entity\Combatant patchEntity(\Cake\Datasource\EntityInterface $entity, array $data, array $options = [])
 * @method \App\Model\Entity\Combatant[] patchEntities($entities, array $data, array $options = [])
 * @method \App\Model\Entity\Combatant findOrCreate($search, callable $callback = null, $options = [])
 */
class CombatantsTable extends Table
{

    /**
     * Initialize method
     *
     * @param array $config The configuration for the Table.
     * @return void
     */
    public function initialize(array $config)
    {
        parent::initialize($config);

        $this->setTable('combatants');
        $this->setDisplayField('name');
        $this->setPrimaryKey('id');
    }

    /**
     * Default validation rules.
     *
     * @param \Cake\Validation\Validator $validator Validator instance.
     * @return \Cake\Validation\Validator
     */
    public function validationDefault(Validator $validator)
    {
        $validator
            ->integer('id')
            ->allowEmpty('id', 'create');

        $validator
            ->requirePresence('name', 'create')
            ->notEmpty('name');

        $validator
            ->requirePresence('max_hp', 'create')
            ->notEmpty('max_hp');

        $validator
            ->requirePresence('ini_bonus', 'create')
            ->notEmpty('ini_bonus');

        return $validator;
    }
}
