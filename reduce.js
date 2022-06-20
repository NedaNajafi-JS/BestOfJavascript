const agencies = [{
                                "_id": "629ee3a4be0e1083435292f0",
                                "address": {
                                    "coordinate": {
                                        "lat": 35.5465465,
                                        "lon": 45.6464685
                                    },
                                    "province": "تهران",
                                    "city": "دماوند"
                                },
                                "services": [
                                    "سرویس موتور",
                                    "تعویض قطعه"
                                ],
                                "vehicles": [
                                    "628b66072a0b0084622e1dcd"
                                ],
                                "name": "تست",
                                "code": "35446",
                                "uniqueId": "65646",
                                "phone": "22556688",
                                "status": true,
                                "manager": {
                                    "name": "تست",
                                    "phone": "09126568985"
                                },
                                "__v": 0
                            },
                            {
                                "_id": "629eeb3bbe0e1083435292f1",
                                "address": {
                                    "coordinate": {
                                        "lat": 35.6436453,
                                        "lon": 45.64646
                                    },
                                    "province": "تهران",
                                    "city": "تهران"
                                },
                                "services": [
                                    "سرویس موتور"
                                ],
                                "vehicles": [
                                    "628b66072a0b0084622e1dcd"
                                ],
                                "name": "تست",
                                "code": "65654646",
                                "uniqueId": "655656",
                                "phone": "555558796",
                                "status": true,
                                "manager": {
                                    "name": "تست",
                                    "phone": "09126262742"
                                },
                                "__v": 0
                            },
                            {
                                "_id": "629eed52be0e1083435292f2",
                                "address": {
                                    "coordinate": {
                                        "lat": 45.5436465,
                                        "lon": 35.3543436
                                    },
                                    "province": "تهران",
                                    "city": "تهران"
                                },
                                "services": [
                                    "تعویض قطعه"
                                ],
                                "vehicles": [
                                    "628b66072a0b0084622e1dcd"
                                ],
                                "name": "تست",
                                "code": "6464",
                                "uniqueId": "64646",
                                "phone": "646464646",
                                "status": true,
                                "manager": {
                                    "name": "تست",
                                    "phone": "09126655889"
                                },
                                "__v": 0
                            }
                 ];

agencies.reduce((previousValue, agency) => {
        let setCityKey = setProvinceKey(agency.address.province);
        let setValue = setCityKey(agency.address.city);
        previousValue.push(...setValue(agency));
        return previousValue;
    }, [])
