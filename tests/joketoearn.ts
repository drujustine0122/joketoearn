import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Joketoearn } from "../target/types/joketoearn";

describe("joketoearn", () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.Joketoearn as Program<Joketoearn>;

  it("It Create a Joke!", async () => {
    // Add your test here.

    const jokeAccountKeypair = anchor.web3.Keypair.generate();

    const tx = await program.rpc.createJoke("Not funny ...",{
      accounts: {
        jokeAccount: jokeAccountKeypair.publicKey,
        authority: program.provider.wallet.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      },
      signers: [jokeAccountKeypair],
    });

    console.log("Your transaction signature", tx);

    const jokes = await program.account.joke.all();
    console.log(jokes);
  });
});
