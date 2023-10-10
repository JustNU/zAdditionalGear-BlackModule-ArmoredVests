﻿"use strict";
const customItemsFunctions = require("./customItems.js");

class Mod
{
	postDBLoad(container) 
	{
		// Constants
		const logger = container.resolve("WinstonLogger");
		const database = container.resolve("DatabaseServer").getTables();
		const jsonUtil = container.resolve("JsonUtil");
		const core = container.resolve("JustNUCore");
		const VFS = container.resolve("VFS");
		const modDb = `user/mods/zAdditionalGear-TanModule-ArmoredVests/db/`;
		const config = require("../config/config.json");
		const itemConfig = require("../config/itemConfig.json");
		const itemData = require("../db/items/itemData.json");
		const enLocale = require(`../db/locales/en.json`);
		const modPath = __dirname.split("\\").slice(0, -1).join("\\");
		
		// custom items
		const customItems = [
			"AddGearBlack_GEN4_Light",
			"AddGearBlack_Defender2_Light",
			"AddGearBlack_Redut_Light",
			"AddGearBlack_Redut_Assault",
			"AddGearBlack_THOR_ICBA_Light",
			"AddGearBlack_THOR_ICBA_Assault",
			"AddGearBlack_THOR_ICBA_Mobility"
		];
		
		//add retextures
		for (const categoryId in itemConfig) {
			for (const itemId in itemConfig[categoryId]) {
				// handle locale
				for (const localeID in database.locales.global) {
					
					// en placeholder
					if (enLocale[itemId]) {
						for (const localeItemEntry in enLocale[itemId]) {
							database.locales.global[localeID][`${itemId} ${localeItemEntry}`] = enLocale[itemId][localeItemEntry];
						}
					}
					// actual locale
					if (VFS.exists(`${modPath}\\db\\locales\\${localeID}.json`) && localeID != "en") {
						const actualLocale = require(`${modPath}\\db\\locales\\${localeID}.json`);

						if (actualLocale[itemId]) {
							for (const localeItemEntry in actualLocale[itemId]) {
								database.locales.global[localeID][`${itemId} ${localeItemEntry}`] = actualLocale[itemId][localeItemEntry];
							}
						}
					}
					
					// replace some default locale
					if (VFS.exists(`${modPath}\\db\\localesReplace\\${localeID}.json`)) {
						const replaceLocale = require(`${modPath}\\db\\localesReplace\\${localeID}.json`);
						
						for (const localeItem in replaceLocale) {
							for (const localeItemEntry in replaceLocale[localeItem]) {
								database.locales.global[localeID][`${localeItem} ${localeItemEntry}`] = replaceLocale[localeItem][localeItemEntry];
							}
						}
					}
					
				}
				
				// skip custom itens, handle them later
				if (customItems.includes(itemId)) {
					continue;
				}
				
				// add item retexture that is 1:1 to original item
				if (itemConfig[categoryId][itemId]) {
					core.addItemRetexture(itemId, itemData[itemId].BaseItemID, itemData[itemId].BundlePath, config.EnableTradeOffers, config.AddToBots, itemData[itemId].LootWeigthMult);
				}
			}
		}
		
		// Modify quests
		if (config.EnableQuestChanges) {
			const armoredVests = [
				["AddGearBlack_6B13"],
				["AddGearBlack_6B13M_Killa"],
				["AddGearBlack_6B23_1"],
				["AddGearBlack_6B23_2"],
				["AddGearBlack_Defender2"],
				["AddGearBlack_Defender2_Light"],
				["AddGearBlack_GEN4_Full"],
				["AddGearBlack_GEN4_Assault"],
				["AddGearBlack_GEN4_Mobility"],
				["AddGearBlack_GEN4_Light"],
				["AddGearBlack_Gzhel"],
				["AddGearBlack_Redut_Full"],
				["AddGearBlack_Redut_Assault"],
				["AddGearBlack_Redut_Mobility"],
				["AddGearBlack_Redut_Light"],
				["AddGearBlack_Thor_ICBA_Full"],
				["AddGearBlack_THOR_ICBA_Assault"],
				["AddGearBlack_THOR_ICBA_Mobility"],
				["AddGearBlack_THOR_ICBA_Light"],
				["AddGearBlack_Trooper_USEC"],
				["AddGearBlack_Trooper"],
				["AddGearBlack_UntarVest"]
			];
			
			// The survivalist path. Unprotected, but dangerous
			if (database.templates.quests["5d25aed386f77442734d25d2"]) {
				const unprotectedButDangerousGear = database.templates.quests["5d25aed386f77442734d25d2"].conditions.AvailableForFinish[0]._props.counter.conditions[1]._props.equipmentExclusive;
				
				database.templates.quests["5d25aed386f77442734d25d2"].conditions.AvailableForFinish[0]._props.counter.conditions[1]._props.equipmentExclusive = [
					...jsonUtil.clone(unprotectedButDangerousGear),
					...armoredVests
				];
			}
			
			// Swift one
			if (database.templates.quests["60e729cf5698ee7b05057439"]) {
				const swiftOneGear = database.templates.quests["60e729cf5698ee7b05057439"].conditions.AvailableForFinish[0]._props.counter.conditions[1]._props.equipmentExclusive;
				
				database.templates.quests["60e729cf5698ee7b05057439"].conditions.AvailableForFinish[0]._props.counter.conditions[1]._props.equipmentExclusive = [
					...jsonUtil.clone(swiftOneGear),
					...armoredVests
				];
			}
		}
		
		// deal with custom items
		customItemsFunctions.handleCustomItems(database, core, config, itemConfig, itemData);
	}
}

module.exports = { mod: new Mod() }