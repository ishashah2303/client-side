import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Welcome to &nbsp;</h1>
          <h1 className={title({ color: "violet" })}>EduNexus&nbsp;</h1>
          <br />
          <h1 className={title()}>
            Please design a good Home Page.
          </h1>
        </div>
      </section>
    </DefaultLayout>
  );
}
