import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Joketoearn } from "../target/types/joketoearn";

describe("joketoearn", () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.Joketoearn as Program<Joketoearn>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
