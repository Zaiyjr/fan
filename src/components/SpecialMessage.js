import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function SpecialMessage() {
  const [isExpanded, setIsExpanded] = useState(false);

  const poem = [
    "ເຂົາໂຊກດີທີ່ໄດ້ເຈີເບບີ້",
    "ເຂົາບໍ່ຢາກໃຫ້ເບບີ້ຫາຍໄປໃສ",
    "ເຂົາຢາກເຮັດໃຫ້ເບບີ້ມີຄວາມສຸກທີ່ສຸດ",
    "ເຂົາສັນຍາວ່າຈະເປັນຄົນດີຂອງເບບີ້",
    "ເຂົາຈະຢູ່ຄຽງຂ້າງເບບີ້ແມ້ໃນວັນທີ່ລຳບາກ",
    "ເຂົາຢາກໃຊ້ຊີວິດນຳເບບີ້",
    "ເຂົາຢາກພາເບບີ້ໄປທ່ຽວ ແຕ່ເຂົາຍັງບໍ່ມີເງິນ",
    "ເບບີ້ຢ່າເບື່ອເຂົາ",
    "ຮັກເບບີ້ທີ່ສຸດໃນໂລກເລີຍ",
  ];

  

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
      className="max-w-2xl mx-auto px-4 py-8"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-xl"
      >
        <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">
          A Special Message for You
        </h2>
        
        <div className="space-y-4">
          <p className="text-lg text-pink-800 leading-relaxed">
            ສຸກສັນວັນເກີດແຟນສຸດທີ່ຮັກຂໍໃຫ້ມີຄວາມສຸກຫຼາຍໆ ເຕີບໃຫຍ່ເປັນຄົນທີ່ດີຂອງພໍ່ແມ່ແລະຂອງແຟນ555, ຂໍໃຫ້ມີແຕ່ສິ່ງດີໆໃນຊີວິດແລະປະສົບຜົນສຳເລັດ,  ຢ່າຄຽດເກັ່ງຫຼາຍເບບີ້ , ຂໍໃຫ້ຢູ່ນຳເຂົາໄປຕະຫຼອດນະເບບີ້ ເຖິງເຮົາຊິບໍ່ສົມບູນແບບ ແລະ ອາດມີບາງຊ້ວງທີ່ເຮົາບໍ່ເຂົ້າໃຈກັນ ຫລື ເລື່ອງທີ່ເຂົາມັກເວົ້າແຮງກັບເບບີ້ ເຂົາຂໍໂທດເບບີ້ຫຼາຍໆ   ເຮົາອາດຈະເຈິກັນຊ້າ ແຕ່ເຮົາມາເຈິກັນໃນເວິຊັນທີ່ດີທີ່ສຸດ ເຂົາຈະປັບປຸງແລະພັດທະນາຕົນເອງເພື່ອໃຫ້ສົມຄວນກັບເຈົ້າຫຍິງຂອງເຂົາທີ່ສຸດ. 
            I LOVE YOU ALL OF MY HEART.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full py-2 px-4 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
          >
            {isExpanded ? "Hide" : "Read More"}
          </motion.button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden"
              >
                <div className="mt-4 space-y-2">
                  {poem.map((line, index) => (
                    <motion.p
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-pink-700 text-center italic"
                    >
                      {line}
                    </motion.p>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default SpecialMessage; 