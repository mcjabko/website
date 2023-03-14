export interface ServerStatus {
    status: string;
    online: boolean;
    motd: string;
    motd_json: MotdJson;
    favicon: string;
    error?: null;
    players: Players;
    server: Server;
    last_updated: string;
    duration: string;
  }
  export interface MotdJson {
    extra?: (ExtraEntity)[] | null;
    text: string;
  }
  export interface ExtraEntity {
    color: string;
    text: string;
    bold?: boolean | null;
    clickEvent?: ClickEvent | null;
  }
  export interface ClickEvent {
    action: string;
    value: string;
  }
  export interface Players {
    max: number;
    now: number;
    sample?: (null)[] | null;
  }
  export interface Server {
    name: string;
    protocol: number;
  }
  