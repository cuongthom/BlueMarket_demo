import { BaseContract } from "./BaseContract";
import { ethers } from "ethers";
import { BLUE_NFT_ADDRESS } from "../constants";
import BlueABI from "../contractPorts/abis/BlueABI.json"

class BlueMarketContract extends BaseContract {
  constructor(provider: ethers.providers.Web3Provider, account = "") {
    super(provider, BLUE_NFT_ADDRESS, BlueABI, account);
  }

  async approved(address: string, id: number): Promise<any> {
    return await this.getContract().approve(address, id);
  }
  async getApprove(id: number) {
    return await this.getContract().getApproved(id);
  }
}
export default BlueMarketContract;
