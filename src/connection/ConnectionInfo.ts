import NetInfo from '@react-native-community/netinfo';

export class ConnectionInfo {
  private _isOnline!: Boolean;

  constructor() {
    NetInfo.configure({
      reachabilityUrl: 'https://google.com',
      reachabilityTest: async response => response.status === 200,
      reachabilityLongTimeout: 30 * 1000, // 30s
      reachabilityShortTimeout: 5 * 1000, // 5s
      reachabilityRequestTimeout: 15 * 1000, // 15s
    });
    NetInfo.fetch().then(state => {
      this.resolveIsOnline(state);
    });
    // for first time on start
    NetInfo.addEventListener(state => {
      this.resolveIsOnline(state);
    });
  }

  resolveIsOnline(state: any) {
    if (this._isOnline !== state.isConnected) {
      this._isOnline = !!state.isConnected && !!state.isInternetReachable;
    }
  }

  get isOnline(): Boolean {
    return this._isOnline;
  }
}
