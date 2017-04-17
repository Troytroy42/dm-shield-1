export interface Combatant {
  id: number;
  name: string;
  cur_hp: number;
  max_hp: number;
  status: string;
  cur_ini: number;
  ini_bonus: number;
  ally: boolean;
}
