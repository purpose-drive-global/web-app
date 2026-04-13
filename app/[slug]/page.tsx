"use client";

import { useSearchParams, useParams } from "next/navigation";
import { useRef, useMemo } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Image from "next/image";
import { Navbar } from "../page";
import Footer2 from "../components/Footer";

// ─── Animation Variants ─────────────────────────────────────────────
const EASE = [0.22, 1, 0.36, 1] as const;

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.05, ease: EASE },
  }),
};

// ─── Data Mockup ────────────────────────────────────────────────────
const GALLERY_ASSETS = [
  { id: 1, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/w_600,q_auto,f_auto/v1774528688/9_ebyou5.jpg", category: "Gen_Z_Summit_1.0", height: "h-80" },
  { id: 2, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/w_600,q_auto,f_auto/v1774528687/13_h4dxod.jpg", category: "Gen_Z_Summit_1.0", height: "h-80" },
  { id: 3, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/w_600,q_auto,f_auto/v1774528686/28_vnieqd.jpg", category: "Gen_Z_Summit_1.0", height: "h-80" },
  { id: 4, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/w_600,q_auto,f_auto/v1774528686/8-2_wvysw7.jpg", category: "Gen_Z_Summit_1.0", height: "h-80" },
  { id: 5, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/w_600,q_auto,f_auto/v1774528686/6-2_ab9a5r.jpg", category: "Gen_Z_Summit_1.0", height: "h-80" },
  { id: 6, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/w_600,q_auto,f_auto/v1774528685/2-1_vvpalb.jpg", category: "Gen_Z_Summit_1.0", height: "h-80" },
  { id: 7, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/w_600,q_auto,f_auto/v1774528683/2-2_ch1qh2.jpg", category: "Gen_Z_Summit_1.0", height: "h-80" },
  { id: 8, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/w_600,q_auto,f_auto/v1774528682/2-3_gqcoew.jpg", category: "Gen_Z_Summit_1.0", height: "h-80" },
  { id: 9, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/w_600,q_auto,f_auto/v1774528681/3_gkcpas.jpg", category: "Gen_Z_Summit_1.0", height: "h-80" },
  { id: 10, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/w_600,q_auto,f_auto/v1774528681/1_ivvxht.jpg", category: "Gen_Z_Summit_1.0", height: "h-80" },
  { id: 11, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/w_600,q_auto,f_auto/v1774529501/33_y3fftt.jpg", category: "Gen_Z_Summit_2.0", height: "h-60" },
  { id: 13, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/w_600,q_auto,f_auto/v1774529502/Hassan_Oluwatobi_uzbg5r.jpg", category: "Gen_Z_Summit_2.0", height: "h-60" },
  { id: 14, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/w_600,q_auto,f_auto/v1774529502/Davide_Del_Maso_gs5zzg.jpg", category: "Gen_Z_Summit_2.0", height: "h-60" },
  { id: 15, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/w_600,q_auto,f_auto/v1774529498/29_tixjwk.jpg", category: "Gen_Z_Summit_2.0", height: "h-60" },
  { id: 16, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/w_600,q_auto,f_auto/v1774529499/35_lbqzub.jpg", category: "Gen_Z_Summit_2.0", height: "h-60" },
  { id: 17, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/w_600,q_auto,f_auto/v1774529500/Daniel_Chinagozie_ih4kc7.jpg", category: "Gen_Z_Summit_2.0", height: "h-60" },
  { id: 18, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/w_600,q_auto,f_auto/v1774529496/IMG_3700_bpjyps.jpg", category: "Gen_Z_Summit_2.0", height: "h-60" },
  { id: 19, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/w_600,q_auto,f_auto/v1774529497/30_tfhhjs.jpg", category: "Gen_Z_Summit_2.0", height: "h-60" },
  { id: 20, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/w_600,q_auto,f_auto/v1774529495/27_n6pahz.jpg", category: "Gen_Z_Summit_2.0", height: "h-60" },
  { id: 21, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/w_600,q_auto,f_auto/v1774529494/IMG_3677_fwzylq.jpg", category: "Gen_Z_Summit_2.0", height: "h-60" },
  { id: 22, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/w_600,q_auto,f_auto/v1774529492/IMG_3697_oclh57.jpg", category: "Gen_Z_Summit_2.0", height: "h-60" },
  { id: 23, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/w_600,q_auto,f_auto/v1774529491/Hassan_Oluwatobi_1_j7rjzv.jpg", category: "Gen_Z_Summit_2.0", height: "h-60" },
  { id: 24, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/w_600,q_auto,f_auto/v1774529491/28_n1tbpp.jpg", category: "Gen_Z_Summit_2.0", height: "h-60" },
  { id: 25, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/w_600,q_auto,f_auto/v1774529489/IMG_3705_zc5xmn.jpg", category: "Gen_Z_Summit_2.0", height: "h-60" },
  { id: 26, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/w_600,q_auto,f_auto/v1774529489/IMG_3703_sqr9fz.jpg", category: "Gen_Z_Summit_2.0", height: "h-60" },
  { id: 27, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/w_600,q_auto,f_auto/v1774531146/IMG_5375_f2fowc.jpg", category: "Gen_Z_Summit_3.0", height: "h-96" },
  { id: 28, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/w_600,q_auto,f_auto/v1774531161/IMG_5367_uww8lp.jpg", category: "Gen_Z_Summit_3.0", height: "h-96" },
  { id: 29, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/w_600,q_auto,f_auto/v1774531157/IMG_5361_kuxhry.jpg", category: "Gen_Z_Summit_3.0", height: "h-96" },
  { id: 30, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/w_600,q_auto,f_auto/v1774531158/IMG_5364_hshfmv.jpg", category: "Gen_Z_Summit_3.0", height: "h-96" },
  { id: 31, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/w_600,q_auto,f_auto/v1774531156/IMG_5360_oor6tu.jpg", category: "Gen_Z_Summit_3.0", height: "h-96" },
  { id: 32, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/w_600,q_auto,f_auto/v1774531156/IMG_5380_uplxwq.jpg", category: "Gen_Z_Summit_3.0", height: "h-96" },
  { id: 33, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/w_600,q_auto,f_auto/v1774531152/IMG_5374_ojzlm0.jpg", category: "Gen_Z_Summit_3.0", height: "h-96" },
  { id: 34, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/w_600,q_auto,f_auto/v1774531146/IMG_5376_lddefm.jpg", category: "Gen_Z_Summit_3.0", height: "h-96" },
  { id: 35, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/w_600,q_auto,f_auto/v1774531143/IMG_5365_oiptmy.jpg", category: "Gen_Z_Summit_3.0", height: "h-96" },
  { id: 36, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/w_600,q_auto,f_auto/v1774531132/IMG_5363_1_zn0whi.jpg", category: "Gen_Z_Summit_3.0", height: "h-96" },
  { id: 37, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/w_600,q_auto,f_auto/v1774531131/IMG_5381_nwpuoa.jpg", category: "Gen_Z_Summit_3.0", height: "h-96" },
  { id: 38, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/w_600,q_auto,f_auto/v1774531126/IMG_5370_czcuqb.jpg", category: "Gen_Z_Summit_3.0", height: "h-96" },
  { id: 39, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/w_600,q_auto,f_auto/v1774531120/IMG_7679_dvni0j.jpg", category: "Gen_Z_Summit_3.0", height: "h-96" },
  { id: 40, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/w_600,q_auto,f_auto/v1774531111/IMG_5366_1_bfr298.jpg", category: "Gen_Z_Summit_3.0", height: "h-96" },
  { id: 41, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/w_600,q_auto,f_auto/v1774531111/IMG_7515_2_qi0jhh.jpg", category: "Gen_Z_Summit_3.0", height: "h-96" },
  { id: 13, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/v1774531799/IMG_20240323_123046_qdcsk9.jpg", category: "Gen_Z_Shapers—Mushin_Edition", height: "h-96" },
  { id: 13, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/v1774531795/IMG_20240323_123034_xpkwy4.jpg", category: "Gen_Z_Shapers—Mushin_Edition", height: "h-96" },
  { id: 13, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/v1774531795/IMG_20240323_123030_hatv7g.jpg", category: "Gen_Z_Shapers—Mushin_Edition", height: "h-96" },
  { id: 13, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/v1774531794/IMG_20240323_121032_pixkah.jpg", category: "Gen_Z_Shapers—Mushin_Edition", height: "h-96" },
  { id: 13, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/v1774531794/IMG_20240323_122854_xyl4dy.jpg", category: "Gen_Z_Shapers—Mushin_Edition", height: "h-96" },
  { id: 13, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/v1774531793/IMG_20240323_122858_mmjamo.jpg", category: "Gen_Z_Shapers—Mushin_Edition", height: "h-96" },
  { id: 13, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/v1774531786/IMG_20240323_121022_ohvymm.jpg", category: "Gen_Z_Shapers—Mushin_Edition", height: "h-96" },
  { id: 13, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/v1774531783/IMG_20240323_114830_Burst01_dwa36g.jpg", category: "Gen_Z_Shapers—Mushin_Edition", height: "h-96" },
  { id: 13, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/v1774531783/IMG_20240323_120930_yhjfjv.jpg", category: "Gen_Z_Shapers—Mushin_Edition", height: "h-96" },
  { id: 13, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/v1774531780/IMG_20240323_115341_Burst01_nytn9r.jpg", category: "Gen_Z_Shapers—Mushin_Edition", height: "h-96" },
  { id: 13, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/v1774531780/IMG_20240323_120436_Burst01_ue4odx.jpg", category: "Gen_Z_Shapers—Mushin_Edition", height: "h-96" },
  { id: 13, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/v1774531779/IMG_20240323_114347_rbmxlb.jpg", category: "Gen_Z_Shapers—Mushin_Edition", height: "h-96" },
  { id: 13, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/v1774531771/IMG_20240323_123621_tez5wd.jpg", category: "Gen_Z_Shapers—Mushin_Edition", height: "h-96" },
  { id: 13, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/v1774531770/IMG_20240323_113957_a6rycl.jpgg", category: "Gen_Z_Shapers—Mushin_Edition", height: "h-96" },
  { id: 13, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/v1774531769/IMG_20240323_123611_dperhk.jpg", category: "Gen_Z_Shapers—Mushin_Edition", height: "h-96" },
  { id: 13, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/v1774531769/IMG_20240323_114258_fvtb0g.jpg", category: "Gen_Z_Shapers—Mushin_Edition", height: "h-96" },
  { id: 13, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/v1774531769/IMG_20240323_123056_j7y5s3.jpg  ", category: "Gen_Z_Shapers—Mushin_Edition", height: "h-96" },
  { id: 13, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/v1774531767/IMG_20240323_123129_tzhesq.jpg", category: "Gen_Z_Shapers—Mushin_Edition", height: "h-96" },
 { id: 13, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/v1774532096/SaveClip.App_426767917_315501381018141_5604870097534461875_n_ftov2p.jpg", category: "Gen_Z_Shapers—Lagos_Edition", height: "h-96" },
 { id: 13, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/v1774532094/SaveClip.App_426643402_775073237327496_4718738616133373114_n_1080_agl9sh.jpg", category: "Gen_Z_Shapers—Lagos_Edition", height: "h-96" },
 { id: 13, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/v1774532092/SaveClip.App_426588846_1798169570645965_1759262659561885790_n_hzsbvi.jpg", category: "Gen_Z_Shapers—Lagos_Edition", height: "h-96" },
 { id: 13, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/v1774532091/SaveClip.App_426506816_2069426953425112_7909808631585768832_n_rf7vya.jpgg", category: "Gen_Z_Shapers—Lagos_Edition", height: "h-96" },
 { id: 13, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/v1774532088/SaveClip.App_426458902_922582522489655_8373248285009459431_n_futp8k.jpg", category: "Gen_Z_Shapers—Lagos_Edition", height: "h-96" },
 { id: 13, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/v1774532087/Lagos_Editio-_Gen_Z_Shapers_2_fb18a0.png", category: "Gen_Z_Shapers—Lagos_Edition", height: "h-96" },
 { id: 13, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/v1774532086/SaveClip.App_426362412_383743587729960_8296087991336169990_n_ybjsak.jpg", category: "Gen_Z_Shapers—Lagos_Edition", height: "h-96" },
 { id: 13, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/v1774532083/SaveClip.App_427736492_903158461811131_5431123397395435827_n_nwquxx.jpg", category: "Gen_Z_Shapers—Lagos_Edition", height: "h-96" },
 { id: 13, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/v1774532085/SaveClip.App_426293996_1634038413669463_3648953986886316170_n_l41lwp.jpg", category: "Gen_Z_Shapers—Lagos_Edition", height: "h-96" },
 { id: 13, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/v1774532082/SaveClip.App_426825224_307649168976352_8973803403047721403_n_cf06dq.jpg", category: "Gen_Z_Shapers—Lagos_Edition", height: "h-96" },
 { id: 13, src: "https://res.cloudinary.com/dmfkmgt12/image/upload/v1774532082/SaveClip.App_427099369_419070930579399_1465431187074681855_n_p1f5vo.jpg", category: "Gen_Z_Shapers—Lagos_Edition", height: "h-96" },
 /*  { id: 13, src: "/img3.jpg", category: "Gen_Z Shapers—Ikorodu", height: "h-96" },
  { id: 13, src: "/img3.jpg", category: "Gen_Z_Shapers—Abuja_(Durumi_IDP_Camp)", height: "h-96" },*/

  // Add more items here...
];

export default function DynamicGalleryPage() {
  const params = useParams();
  const slug = params.slug; // This is the [slug] from your folder name
  
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  // 1. Change the filter to use 'slug' from the URL path
  const filteredImages = useMemo(() => {
    if (!slug) return GALLERY_ASSETS;
    // We match the URL slug to the asset's category
    return GALLERY_ASSETS.filter((img) => img.category === slug);
  }, [slug]);

  return (
    <main className="">
      <Navbar/>
      <div className="max-w-7xl mx-auto min-h-screen  py-20 px-6">
        <header className="mb-12">
          <h1 className="text-4xl font-black  capitalize tracking-tight">
            {/* 2. Display the slug as the title */}
            {typeof slug === 'string' ? slug.replace(/-/g, ' ') : "Our Gallery"}
          </h1>
          <div className="h-1 w-20 bg-yellow-500 mt-4 rounded-full" />
        </header>

        {/* The Masonry Grid stays the same */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {filteredImages.map((item, i) => (
             <motion.div key={item.id} custom={i} variants={fadeIn}>
                <Image 
                  src={item.src} 
                  alt="Gallery" 
                  width={600} 
                  height={800} 
                  className={`w-full object-cover ${item.height} rounded-2xl`}
                  unoptimized
                />
             </motion.div>
          ))}
        </motion.div>
      </div>
      <Footer2/>
    </main>
  );
}