export const ADAPTOR_PROGRAM_ID = "EBN93eXs5fHGBABuajQqdsKRkCgaqtJa8vEFD6vKXiP";

export const DRIFT = {
  PROGRAM_ID: "dRiftyHA39MWEi3m9aunc5MzRF1JYuBsbn6VPcn33UH",
  LOOKUP_TABLE_ADDRESSES: ["Fpys8GRa5RBWfyeN7AaDUwFGD1zkDCA4z3t4CJLV8dfL"],
  SUB_ACCOUNT_ID: 0,
  SPOT: {
    STATE: "5zpq7DvB6UdFFvpmBPspGPNfUGoBRRCE2HHg5u3gxcsN",
    SOL: {
      MARKET_INDEX: 1,
      ORACLE: "3m6i4RFWEDw2Ft4tFHPJtYgmpPe21k56M3FHeWYrgGBz",
    },
    USDC: {
      MARKET_INDEX: 0,
      ORACLE: "9VCioxmni2gDLv11qufWzT3RDERhQE4iY5Gf7NTfYyAV",
    },
    USDT: {
      MARKET_INDEX: 5,
      ORACLE: "JDKJSkxjasBGL3ce1pkrN6tqDzuVUZPWzzkGuyX8m9yN",
    },
    PYUSD: {
      MARKET_INDEX: 22,
      ORACLE: "5QZMnsyndmphvZF4BNgoMHwVZaREXeE2rpBoCPMxgCCd",
    },
    USDS: {
      MARKET_INDEX: 28,
      ORACLE: "7pT9mxKXyvfaZKeKy1oe2oV2K1RFtF7tPEJHUY3h2vVV",
    },
  },
};

export const DISCRIMINATOR = {
  CANCEL_REQUEST_WITHDRAW_VAULT: [231, 54, 14, 6, 223, 124, 127, 238],
  DEPOSIT_USER: [162, 73, 130, 153, 234, 34, 17, 56],
  DEPOSIT_VAULT: [126, 224, 21, 255, 228, 53, 117, 33],
  INITIALIZE_USER: [200, 103, 130, 67, 230, 84, 7, 225],
  INITIALIZE_VAULT_DEPOSITOR: [112, 174, 162, 232, 89, 92, 205, 168],
  REQUEST_WITHDRAW_VAULT: [248, 225, 47, 22, 116, 144, 23, 143],
  WITHDRAW_USER: [86, 169, 152, 107, 33, 180, 134, 115],
  WITHDRAW_VAULT: [135, 7, 237, 120, 149, 94, 95, 7],
};
