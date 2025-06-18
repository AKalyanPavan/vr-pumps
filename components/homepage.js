import Header from "./header.js";
import Fold1 from "@/components/fold1.js";
import Fold2 from "@/components/fold2.js";
import Fold3 from "@/components/fold3.js";
import Fold4 from "@/components/fold4.js";
import Fold5 from "@/components/fold5.js";
import Footer from "@/components/footer.js";

export default function Homepage() {
	return(
		<div className="font-['Montserrat']">
			<Header />
			<Fold1 />
			<Fold2 />
			<Fold3 />
			<Fold4 />
			<Fold5 />
			<Footer />
		</div>
	)
}