const { Octokit } = require("@octokit/rest");
const { createAppAuth } = require("@octokit/auth-app");
const fs = require("fs");
const path = require("path");

const GITHUB_APP_ID = process.env.GITHUB_APP_ID;
const GITHUB_PRIVATE_KEY = process.env.GITHUB_PRIVATE_KEY;
const GITHUB_REPO = process.env.GITHUB_REPO;

const octokit = new Octokit({
  authStrategy: createAppAuth,
  auth: {
    appId: GITHUB_APP_ID,
    privateKey: GITHUB_PRIVATE_KEY,
    installationId: process.env.GITHUB_INSTALLATION_ID,
  },
});

async function uploadToolToGitHub(toolData, fileName) {
  const content = JSON.stringify(toolData, null, 2);
  const filePath = path.join("tools", fileName);

  try {
    await octokit.repos.createOrUpdateFileContents({
      owner: GITHUB_REPO.split("/")[0],
      repo: GITHUB_REPO.split("/")[1],
      path: filePath,
      message: `Upload tool: ${fileName}`,
      content: Buffer.from(content).toString("base64"),
      committer: {
        name: "Tool Gallery",
        email: "toolgallery@example.com",
      },
      author: {
        name: "Tool Gallery",
        email: "toolgallery@example.com",
      },
    });
    return { success: true, message: "Tool uploaded successfully." };
  } catch (error) {
    console.error("Error uploading tool:", error);
    return { success: false, message: "Failed to upload tool." };
  }
}

async function getToolsFromGitHub() {
  try {
    const { data } = await octokit.repos.getContent({
      owner: GITHUB_REPO.split("/")[0],
      repo: GITHUB_REPO.split("/")[1],
      path: "tools",
    });

    const tools = await Promise.all(
      data.map(async (file) => {
        const { data: fileData } = await octokit.repos.getContent({
          owner: GITHUB_REPO.split("/")[0],
          repo: GITHUB_REPO.split("/")[1],
          path: file.path,
        });
        return JSON.parse(Buffer.from(fileData.content, "base64").toString());
      })
    );

    return tools;
  } catch (error) {
    console.error("Error fetching tools:", error);
    return [];
  }
}

module.exports = {
  uploadToolToGitHub,
  getToolsFromGitHub,
};