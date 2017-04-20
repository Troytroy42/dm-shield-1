<?php
namespace Combat\Controller;

use Combat\Controller\AppController;

/**
 * Combatants Controller
 *
 * @property \Combat\Model\Table\CombatantsTable $Combatants
 */
class CombatantsController extends AppController
{
    /**
     * Index method
     *
     * @return \Cake\Network\Response|null
     */
    public function index()
    {
        $combatants = $this->paginate($this->Combatants);

        $this->set(compact('combatants'));
        $this->set('_serialize', ['combatants']);
    }

    /**
     * View method
     *
     * @param string|null $id Combatant id.
     * @return \Cake\Network\Response|null
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $combatant = $this->Combatants->get($id, [
            'contain' => []
        ]);

        $this->set('combatant', $combatant);
        $this->set('_serialize', ['combatant']);
    }

    /**
     * Add method
     *
     * @return \Cake\Network\Response|null Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $combatant = $this->Combatants->newEntity();
        if ($this->request->is('post')) {
            $combatant = $this->Combatants->patchEntity($combatant, $this->request->getData());
            if ($this->Combatants->save($combatant)) {
                $this->Flash->success(__('The combatant has been saved.'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The combatant could not be saved. Please, try again.'));
        }
        $this->set(compact('combatant'));
        $this->set('_serialize', ['combatant']);
    }

    /**
     * Edit method
     *
     * @param string|null $id Combatant id.
     * @return \Cake\Network\Response|null Redirects on successful edit, renders view otherwise.
     * @throws \Cake\Network\Exception\NotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $combatant = $this->Combatants->get($id, [
            'contain' => []
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $combatant = $this->Combatants->patchEntity($combatant, $this->request->getData());
            if ($this->Combatants->save($combatant)) {
                $this->Flash->success(__('The combatant has been saved.'));

                return $this->redirect(['action' => 'index']);
            }
            $this->Flash->error(__('The combatant could not be saved. Please, try again.'));
        }
        $this->set(compact('combatant'));
        $this->set('_serialize', ['combatant']);
    }

    /**
     * Delete method
     *
     * @param string|null $id Combatant id.
     * @return \Cake\Network\Response|null Redirects to index.
     * @throws \Cake\Datasource\Exception\RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $combatant = $this->Combatants->get($id);
        if ($this->Combatants->delete($combatant)) {
            $this->Flash->success(__('The combatant has been deleted.'));
        } else {
            $this->Flash->error(__('The combatant could not be deleted. Please, try again.'));
        }

        return $this->redirect(['action' => 'index']);
    }
}
