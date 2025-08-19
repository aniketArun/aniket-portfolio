import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import NavbarDefault from "../navbar/NavbarDefault";

export default function Poems() {
    const poems = [
        {
            id: 1,
            title: "प्रेमाची ओढ",
            content: "तुझ्या डोळ्यांमध्ये उमटलेले स्वप्न माझं आयुष्य बनलं आहे.",
        },
        {
            id: 2,
            title: "आठवणींची रात्र",
            content: "तारकांच्या प्रकाशातही तुझ्या हास्याची चमक हरवली नाही.",
        },
        {
            id: 3,
            title: "मनाची दुनिया",
            content: "तुझ्या शब्दांत लपलेला गोडवा माझ्या मनाला शांत करतो.",
        },
        {
            id: 4,
            title: "माफ कर सखे....",
            content: `माफ कर सखे पण मी तुझ्यात बाई शोधत न्हाई
मनाची दूरच राहिली गं आधी पोटाचीच भूक भागत नाही..

विस्तव गं मी गुंतवाचा त्याला पेटवणारा वाराच न्हाई
भावणेचीच लिहिली गं कविता मी, पण कुणा कळली न्हाई..
माफ कर सखे पण मी तुझ्यात बाई शोधत न्हाई..

कोरडी नाती जड होतात मला अन् 
जास्त ओली नाती मी बनवत न्हाई..
खुप रडलेत शब्द माझे आता आठवांचे
विष मी त्यांना पाजतच न्हाई..
माफ कर सखे पण मी तुझ्यात बाई शोधत न्हाई

वाचलेत गझल मीही, भावनेत गुंतलो कधी
तरि ओठांवर आणत न्हाई..
जड असेल पारडा वासनेचा..
पण माझ्या नियतीला तो तोलू शकत न्हाई..
माफ कर सखे पण मी तुझ्यात बाई शोधत न्हाई..

आग ओकणाऱ्या उन्हात राबलोय गं..
पण नजर अजून इतकी पडली नाही..
रडलाय बाप माझाही तरीही
पाहिलंय मी त्याला कुरवळताना गाई..
माफ कर सखे पण मी तुझ्यात बाई शोधत न्हाई..

वेदना, वेदना, वेदना किती सोसल्यात मी..
घायाळ झालं काळीज माझं तरि विव्हळलो न्हाई..
मोजलेत कित्येकांनी बंडल 
पण ही कविता आजवर मी विकली न्हाई..!!

व्यथा मांडून मांडून थकलो गं.. 
माझी व्यथा कुणा समजली न्हाई..!!
गझल आणि शेर ऐकवणारा शायर ऐकला सगळ्यांनी
पण भावनेला शब्दबद्ध करणारा
हा कवी कुणा उमगला नाही....

माफ कर सखे पण मी तुझ्यात बाई शोधत न्हाई..!!!`,
        },
        {
            id: 5,
            title: "कोड तिच्यासाठी",
            content: `बघता बघता syestem सूरू झाली
endsem च्या compiler ने आपल 
launching ही पूर्ण केलं होत..
येत तर मला काहीच
नव्हत पण  तिच logic मात्र
 डोक्यात ठासून भरलं होत..!!!

ना structure माहीत ना धड syntax
पण तीन आयुष्याचा प्रॉग्रम
शिकवला..
सुरुवात कुठून करावी सुचत नव्हतं..
शेवटीं हिमतीने मेसेज क्लास चा
constructor वापरून एक बहाना केला..
कळत नकळत एक static array
माझ्यासाठी तिच्याही मनात तयार झाला..

माझं optimization बघून मग मी
तिचा फ्रेंड function बनलो ..
अन् तीला विचारून protected डेटा
access करत होतो..!!
तिही आनंदात होती मी ही अगदी खुश झालो..
अन् मग नव्या नात्याची सुरुवात केली..

सगळा कोड बरोबर होता.. पण एक दिवस अचानक 
माझ्याकडून नियम मोडला न विचारता private Data
access केला..
अन् फाईल compile होताना मग
माञ syntax error च आला..
दिसतं होत मला.. माझा call चुकला..
पण सवय होती exception handling ची
म्हनून गोडवा throw केला.
मग तिलाच झलक आली.. 
अन् मला static करून टाकलंय
unique असलो जरी तिच्यासाठी मी..
पण मूल्य शून्य करुण घेतलय..!!

आता नात्याच्या file मध्ये.. नवीन मोड दिसतं नाही..
सगळं काही append सुरू आहे..
नविन stream सुरू करावी लागेल कदाचीत..
कारणं माझं destructor call झालंय..!!
😂😂`,
        },
    ];

    const [current, setCurrent] = useState(0);

    const handleNext = () => {
        setCurrent((prev) => (prev + 1) % poems.length);
    };

    return (
        <>
            <NavbarDefault />
            <div className="min-h-screen flex flex-col justify-center items-center px-4 py-10 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-4xl md:text-6xl font-extrabold text-center mb-10 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent"
                >
                    “Not Poems, But Pieces of Me” ✨
                </motion.h1>

                {/* Poem Card */}
                <div className="relative w-full max-w-xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={poems[current].id}
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -40, scale: 0.95 }}
                            transition={{ duration: 0.6 }}
                            className="p-8 rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl border border-gray-700"
                        >
                            <h2 className="text-2xl font-bold text-pink-400 mb-4"
                                style={{ fontFamily: "DevnagriFont" }}
                            >
                                {poems[current].title}
                            </h2>
                            <p
                                className="text-xl leading-relaxed tracking-wide whitespace-pre-line"
                                style={{ fontFamily: "barbharti" }}
                            >
                                {poems[current].content}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <button
                        onClick={handleNext}
                        className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full shadow-lg hover:scale-110 transition-transform"
                    >
                        👉 Read Next
                    </button>
                    <Link
                        to="/"
                        className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-bold rounded-full shadow-lg hover:scale-110 transition-transform text-center"
                    >
                        ⬅ Back to Home
                    </Link>
                </div>
            </div>
        </>
    );
}
