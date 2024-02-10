import { notFound } from "next/navigation";
import { Mdx } from "@/app/components/mdx";
import { Header } from "@/app/components/header";
import { allPages } from "contentlayer/generated";
import { Footer } from "@/app/components/footer";

export const revalidate = 60;


export default async function PostPage() {

	const imprint = allPages.find((page) => page.slug === "imprint");

	if (!imprint) {
		return notFound();
	}

	return (
		<>
		<div className="bg-zinc-50 min-h-screen">
			<Header title={imprint.title}/>
			<article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
				<Mdx code={imprint.body.code} />
			</article>
		</div>
		<Footer classNames="color-black-100 pt-4" />
		</>
	);
}
