const IS_DEV = process.env.APP_VARIANT === "development";
const IS_TEST = process.env.APP_VARIANT === "testing";
const buildNumber = 1;

const appID = IS_TEST
  ? "com.destreetboard.mem-calculator.test"
  : "com.destreetboard.mem-calculator";

export default {
  expo: {
    name: IS_DEV
      ? "Mem Calculator Dev"
      : IS_TEST
      ? "Mem Calculator Test"
      : "Mem Calculator",
    slug: "mem-calculator",
    description:
      "Mem Calculator is a simple calculator that helps you manage your calculation history",
    version: "1.0.0",
    owner: "destreetboard",
    githubUrl: "https://github.com/Destreetboard/mem-calculator",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "automatic",
    assetBundlePatterns: ["**/*"],
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    scheme: "memcalculator",
    assetBundlePatterns: ["**/*"],
    developmentClient: {
      silentLaunch: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF",
      },
      package: appID,
      versionCode: buildNumber,
      useNextNotificationsApi: true,
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: appID,
      buildNumber: buildNumber.toString(),
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "826303e1-f27d-433e-b668-e21cf37c6b4e",
      },
    },
    privacy: "unlisted",
  },
};
