"use strict";

class CustomItems {
	static handleCustomItems(database, core, config, itemConfig, itemData)
	{
		if (itemConfig["Armored Vests"]["AddGearBlack_GEN4_Light"]) {
			core.addItemRetexture("AddGearBlack_GEN4_Light", itemData["AddGearBlack_GEN4_Light"].BaseItemID, itemData["AddGearBlack_GEN4_Light"].BundlePath, false, config.AddToBots, itemData["AddGearBlack_GEN4_Light"].LootWeigthMult);
			const dbItem = database.templates.items["AddGearBlack_GEN4_Light"];
			
			// change weight
			if (dbItem._props.Weight > 0)
				dbItem._props.Weight = dbItem._props.Weight - 2; // 11
			
			// change inventory space
			if (dbItem._props.Width != 1 && dbItem._props.Height != 1) {
				dbItem._props.Height = 3;
				dbItem._props.Width = 3;
			}
			
			// change durability
			dbItem._props.Durability = Math.round(dbItem._props.MaxDurability - (dbItem._props.MaxDurability * 0.08)); // 60
			dbItem._props.MaxDurability = Math.round(dbItem._props.MaxDurability - (dbItem._props.MaxDurability * 0.08)); // 60
			
			// change debuffs
			dbItem._props.speedPenaltyPercent = Math.round(dbItem._props.speedPenaltyPercent - (dbItem._props.speedPenaltyPercent * 0.10)); // -10
			dbItem._props.mousePenalty = Math.round(dbItem._props.mousePenalty - (dbItem._props.mousePenalty * 0.23)); // -13
			dbItem._props.weaponErgonomicPenalty = Math.round(dbItem._props.weaponErgonomicPenalty - (dbItem._props.weaponErgonomicPenalty * 0.08)); // -11
			
			// find handbook entry
			const dbItemHandbook = database.templates.handbook.Items.find((item) => {return item.Id === "AddGearBlack_GEN4_Light"});
			
			// change handbook price
			dbItemHandbook.Price = Math.round(dbItemHandbook.Price - (dbItemHandbook.Price * 0.20)); // 95019
			
			// change flea price (if it has one)
			if (database.templates.prices["AddGearBlack_GEN4_Light"])
				database.templates.prices["AddGearBlack_GEN4_Light"] = dbItemHandbook.Price;
			
			// add trade offer
			if (config.EnableTradeOffers)
				core.createTraderOffer("AddGearBlack_GEN4_Light", "5ac3b934156ae10c4430e83c", "5449016a4bdc2d6f028b456f", dbItemHandbook.Price, 4);
			
		}
		
		if (itemConfig["Armored Vests"]["AddGearBlack_Defender2_Light"]) {
			core.addItemRetexture("AddGearBlack_Defender2_Light", itemData["AddGearBlack_Defender2_Light"].BaseItemID, itemData["AddGearBlack_Defender2_Light"].BundlePath, false, config.AddToBots, itemData["AddGearBlack_Defender2_Light"].LootWeigthMult);
			const dbItem = database.templates.items["AddGearBlack_Defender2_Light"];
			
			// change weight
			if (dbItem._props.Weight > 0)
				dbItem._props.Weight = dbItem._props.Weight - 1.5; // 10
			
			// change inventory space
			if (dbItem._props.Width != 1 && dbItem._props.Height != 1) {
				dbItem._props.Width = 3;
				dbItem._props.Height = 3;
			}
			
			// change durability
			dbItem._props.Durability = Math.round(dbItem._props.MaxDurability - (dbItem._props.MaxDurability * 0.07)); // 65
			dbItem._props.MaxDurability = Math.round(dbItem._props.MaxDurability - (dbItem._props.MaxDurability * 0.07)); // 65
			
			// change debuffs
			dbItem._props.speedPenaltyPercent = Math.round(dbItem._props.speedPenaltyPercent - (dbItem._props.speedPenaltyPercent * 0.33)); // -6
			dbItem._props.mousePenalty = Math.round(dbItem._props.mousePenalty - (dbItem._props.mousePenalty * 0.16)); // -10
			dbItem._props.weaponErgonomicPenalty = Math.round(dbItem._props.weaponErgonomicPenalty - (dbItem._props.weaponErgonomicPenalty * 0.14)); // -6
			
			// find handbook entry
			const dbItemHandbook = database.templates.handbook.Items.find((item) => {return item.Id === "AddGearBlack_Defender2_Light"});
			
			// change handbook price
			dbItemHandbook.Price = Math.round(dbItemHandbook.Price - (dbItemHandbook.Price * 0.40)); // 230981
			
			// change flea price (if it has one)
			if (database.templates.prices["AddGearBlack_Defender2_Light"])
				database.templates.prices["AddGearBlack_Defender2_Light"] = dbItemHandbook.Price;
		}
		
		if (itemConfig["Armored Vests"]["AddGearBlack_Redut_Light"]) {
			core.addItemRetexture("AddGearBlack_Redut_Light", itemData["AddGearBlack_Redut_Light"].BaseItemID, itemData["AddGearBlack_Redut_Light"].BundlePath, false, config.AddToBots, itemData["AddGearBlack_Redut_Light"].LootWeigthMult);
			const dbItem = database.templates.items["AddGearBlack_Redut_Light"];
			
			// change weight
			if (dbItem._props.Weight > 0)
				dbItem._props.Weight = dbItem._props.Weight - 3.5; // 10
			
			// change inventory space
			if (dbItem._props.Width != 1 && dbItem._props.Height != 1) {
				dbItem._props.Height = 3;
				dbItem._props.Width = 3;
			}
			
			// change durability
			dbItem._props.Durability = Math.round(dbItem._props.MaxDurability - (dbItem._props.MaxDurability * 0.17)); // 50
			dbItem._props.MaxDurability = Math.round(dbItem._props.MaxDurability - (dbItem._props.MaxDurability * 0.17)); // 50
			
			// change debuffs
			dbItem._props.speedPenaltyPercent = Math.round(dbItem._props.speedPenaltyPercent - (dbItem._props.speedPenaltyPercent * 0.23)); // -10
			dbItem._props.mousePenalty = Math.round(dbItem._props.mousePenalty - (dbItem._props.mousePenalty * 0.33)); // -8
			dbItem._props.weaponErgonomicPenalty = Math.round(dbItem._props.weaponErgonomicPenalty - (dbItem._props.weaponErgonomicPenalty * 0.09)); // -10
			
			// find handbook entry
			const dbItemHandbook = database.templates.handbook.Items.find((item) => {return item.Id === "AddGearBlack_Redut_Light"});
			
			// change handbook price
			dbItemHandbook.Price = Math.round(dbItemHandbook.Price - (dbItemHandbook.Price * 0.20)); // 82299
			
			// change flea price (if it has one)
			if (database.templates.prices["AddGearBlack_Redut_Light"])
				database.templates.prices["AddGearBlack_Redut_Light"] = dbItemHandbook.Price;
		}
		
		if (itemConfig["Armored Vests"]["AddGearBlack_Redut_Assault"]) {
			core.addItemRetexture("AddGearBlack_Redut_Assault", itemData["AddGearBlack_Redut_Assault"].BaseItemID, itemData["AddGearBlack_Redut_Assault"].BundlePath, false, config.AddToBots, itemData["AddGearBlack_Redut_Assault"].LootWeigthMult);
			const dbItem = database.templates.items["AddGearBlack_Redut_Assault"];
			
			// change weight
			if (dbItem._props.Weight > 0)
				dbItem._props.Weight = dbItem._props.Weight - 3; // 13.5
			
			// change inventory space
			if (dbItem._props.Width != 1 && dbItem._props.Height != 1) {
				dbItem._props.Height = 3;
				dbItem._props.Width = 4;
			}
			
			// change durability
			dbItem._props.Durability = Math.round(dbItem._props.MaxDurability - (dbItem._props.MaxDurability * 0.40)); // 60
			dbItem._props.MaxDurability = Math.round(dbItem._props.MaxDurability - (dbItem._props.MaxDurability * 0.40)); // 60
			
			// change debuffs
			dbItem._props.speedPenaltyPercent = Math.round(dbItem._props.speedPenaltyPercent - (dbItem._props.speedPenaltyPercent * 0.70)); // -11
			dbItem._props.mousePenalty = Math.round(dbItem._props.mousePenalty - (dbItem._props.mousePenalty * 0.06)); // -14
			dbItem._props.weaponErgonomicPenalty = Math.round(dbItem._props.weaponErgonomicPenalty - (dbItem._props.weaponErgonomicPenalty * 0.14)); // -12
			
			// find handbook entry
			const dbItemHandbook = database.templates.handbook.Items.find((item) => {return item.Id === "AddGearBlack_Redut_Assault"});
			
			// change handbook price
			dbItemHandbook.Price = Math.round(dbItemHandbook.Price - (dbItemHandbook.Price * 0.20)); // 150637
			
			// change flea price (if it has one)
			if (database.templates.prices["AddGearBlack_Redut_Assault"])
				database.templates.prices["AddGearBlack_Redut_Assault"] = dbItemHandbook.Price;
		}
		
		if (itemConfig["Armored Vests"]["AddGearBlack_THOR_ICBA_Light"]) {
			core.addItemRetexture("AddGearBlack_THOR_ICBA_Light", itemData["AddGearBlack_THOR_ICBA_Light"].BaseItemID, itemData["AddGearBlack_THOR_ICBA_Light"].BundlePath, false, config.AddToBots, itemData["AddGearBlack_THOR_ICBA_Light"].LootWeigthMult);
			const dbItem = database.templates.items["AddGearBlack_THOR_ICBA_Light"];
			
			// change weight
			if (dbItem._props.Weight > 0)
				dbItem._props.Weight = dbItem._props.Weight - 7; // 11
			
			// change inventory space
			if (dbItem._props.Width != 1 && dbItem._props.Height != 1) {
				dbItem._props.Width = 3;
				dbItem._props.Height = 3;
			}
			
			// change durability
			dbItem._props.Durability = Math.round(dbItem._props.MaxDurability - (dbItem._props.MaxDurability * 0.28)); // 65
			dbItem._props.MaxDurability = Math.round(dbItem._props.MaxDurability - (dbItem._props.MaxDurability * 0.28)); // 65
			
			// change debuffs
			dbItem._props.speedPenaltyPercent = Math.round(dbItem._props.speedPenaltyPercent - (dbItem._props.speedPenaltyPercent * 0.50)); // -7
			dbItem._props.mousePenalty = Math.round(dbItem._props.mousePenalty - (dbItem._props.mousePenalty * 0.50)); // -4
			dbItem._props.weaponErgonomicPenalty = Math.round(dbItem._props.weaponErgonomicPenalty - (dbItem._props.weaponErgonomicPenalty * 0.50)); // -5
			
			// other stats
			dbItem._props.armorZone = ["Chest", "Stomach"];
			
			// find handbook entry
			const dbItemHandbook = database.templates.handbook.Items.find((item) => {return item.Id === "AddGearBlack_THOR_ICBA_Light"});
			
			// change handbook price
			dbItemHandbook.Price = Math.round(dbItemHandbook.Price - (dbItemHandbook.Price * 0.40)); // 206700
			
			// change flea price (if it has one)
			if (database.templates.prices["AddGearBlack_THOR_ICBA_Light"])
				database.templates.prices["AddGearBlack_THOR_ICBA_Light"] = dbItemHandbook.Price;
		}
		
		if (itemConfig["Armored Vests"]["AddGearBlack_THOR_ICBA_Assault"]) {
			core.addItemRetexture("AddGearBlack_THOR_ICBA_Assault", itemData["AddGearBlack_THOR_ICBA_Assault"].BaseItemID, itemData["AddGearBlack_THOR_ICBA_Assault"].BundlePath, false, config.AddToBots, itemData["AddGearBlack_THOR_ICBA_Assault"].LootWeigthMult);
			const dbItem = database.templates.items["AddGearBlack_THOR_ICBA_Assault"];
			
			// change weight
			if (dbItem._props.Weight > 0)
				dbItem._props.Weight = dbItem._props.Weight - 2; // 16
			
			// change inventory space
			if (dbItem._props.Width != 1 && dbItem._props.Height != 1) {
				dbItem._props.Width = 4;
				dbItem._props.Height = 3;
			}
			
			// change durability
			dbItem._props.Durability = Math.round(dbItem._props.MaxDurability - (dbItem._props.MaxDurability * 0.11)); // 80
			dbItem._props.MaxDurability = Math.round(dbItem._props.MaxDurability - (dbItem._props.MaxDurability * 0.11)); // 80
			
			// change debuffs
			dbItem._props.speedPenaltyPercent = Math.round(dbItem._props.speedPenaltyPercent - (dbItem._props.speedPenaltyPercent * 0.14)); // -12
			dbItem._props.mousePenalty = Math.round(dbItem._props.mousePenalty - (dbItem._props.mousePenalty * 0.37)); // -5
			dbItem._props.weaponErgonomicPenalty = Math.round(dbItem._props.weaponErgonomicPenalty - (dbItem._props.weaponErgonomicPenalty * 0.20)); // -8
			
			// find handbook entry
			const dbItemHandbook = database.templates.handbook.Items.find((item) => {return item.Id === "AddGearBlack_THOR_ICBA_Assault"});
			
			// change handbook price
			dbItemHandbook.Price = Math.round(dbItemHandbook.Price - (dbItemHandbook.Price * 0.20)); // 275600
			
			// change flea price (if it has one)
			if (database.templates.prices["AddGearBlack_THOR_ICBA_Assault"])
				database.templates.prices["AddGearBlack_THOR_ICBA_Assault"] = dbItemHandbook.Price;
		}
		
		// THOR MOBILITY
		if (itemConfig["Armored Vests"]["AddGearBlack_THOR_ICBA_Mobility"]) {
			core.addItemRetexture("AddGearBlack_THOR_ICBA_Mobility", itemData["AddGearBlack_THOR_ICBA_Mobility"].BaseItemID, itemData["AddGearBlack_THOR_ICBA_Mobility"].BundlePath, false, config.AddToBots, itemData["AddGearBlack_THOR_ICBA_Mobility"].LootWeigthMult);
			const dbItem = database.templates.items["AddGearBlack_THOR_ICBA_Mobility"];
			
			// change weight
			if (dbItem._props.Weight > 0)
				dbItem._props.Weight = dbItem._props.Weight - 4; // 14
			
			// change inventory space
			if (dbItem._props.Width != 1 && dbItem._props.Height != 1) {
				dbItem._props.Width = 3;
				dbItem._props.Height = 4;
			}
			
			// change durability
			dbItem._props.Durability = Math.round(dbItem._props.MaxDurability - (dbItem._props.MaxDurability * 0.11)); // 80
			dbItem._props.MaxDurability = Math.round(dbItem._props.MaxDurability - (dbItem._props.MaxDurability * 0.11)); // 80
			
			// change debuffs
			dbItem._props.speedPenaltyPercent = Math.round(dbItem._props.speedPenaltyPercent - (dbItem._props.speedPenaltyPercent * 0.28)); // -10
			dbItem._props.mousePenalty = Math.round(dbItem._props.mousePenalty - (dbItem._props.mousePenalty * 0.12)); // -7
			dbItem._props.weaponErgonomicPenalty = Math.round(dbItem._props.weaponErgonomicPenalty - (dbItem._props.weaponErgonomicPenalty * 0.50)); // -5
			
			// other stats
			dbItem._props.armorZone = ["Chest", "Stomach"];
			
			// find handbook entry
			const dbItemHandbook = database.templates.handbook.Items.find((item) => {return item.Id === "AddGearBlack_THOR_ICBA_Mobility"});
			
			// change handbook price
			dbItemHandbook.Price = Math.round(dbItemHandbook.Price - (dbItemHandbook.Price * 0.30)); // 241150
			
			// change flea price (if it has one)
			if (database.templates.prices["AddGearBlack_THOR_ICBA_Mobility"])
				database.templates.prices["AddGearBlack_THOR_ICBA_Mobility"] = dbItemHandbook.Price;
		}
	}
}

module.exports = CustomItems;