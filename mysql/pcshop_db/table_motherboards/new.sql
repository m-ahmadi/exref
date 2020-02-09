/*!40101 SET NAMES utf8 */;
DROP TABLE IF EXISTS motherboards;

CREATE TABLE motherboards (
	/* ####################################################################################################### */
	
	`product_id` int(11) auto_increment,
	`motherboard_id` int(11),
	`p_cat` varchar(15),
	`company` varchar(20),
	`model` varchar(20),
	`rev` decimal(2,1),
	
	
	/* ####################################################################################################### */
	`cpu__company` varchar(20),
	`cpu__socket` varchar(20),
	
	`cpu__supported_cpus` varchar(20),
	`cpu__supported_fsbs` varchar(100),
	
	`cpu__cpuSupp_detail_1` varchar(100),
	`cpu__cpuSupp_detail_2` varchar(100),
	`cpu__cpuSupp_detail_3` varchar(100),
	`cpu__cpuSupp_detail_4` varchar(100),
	`cpu__cpuSupp_detail_5` varchar(100),
	
	
	
	`cpu__auto-detects_cpu_voltage` tinyint(1) unsigned,
	`cpu__` tinyint(1) unsigned,
	`cpu__` tinyint(1) unsigned,
	`cpu__` tinyint(1) unsigned,
	
	
	/* ####################################################################################################### */
	
	`fsb__` varchar(50),
	`fsb__` varchar(50),
	`fsb__` varchar(50),
	
	/* ####################################################################################################### */
	
	
	`chipset__number_of_chips` varchar(50),
	`chipset__northbridge` varchar(50),
	`chipset__southbridge` varchar(50),
	`chipset__other1` varchar(50),
	`chipset__other2` varchar(50),
	`chipset__other3` varchar(50),
	
	/*Chipset with build in S3 savage 4 graphics core*/
	
	/* ####################################################################################################### */
	
	`m__ddr3_slot` tinyint(2) unsigned,
	`m__ddr3_upTo` tinyint(2) unsigned,
	`m__ddr3_bus` varchar(100),
	`m__ddr3_comment` varchar(500),
	
	`m__ddr2_slot` tinyint(2) unsigned,
	`m__ddr2_upTo` tinyint(2) unsigned,
	`m__ddr2_bus` varchar(100),
	`m__ddr2_comment` varchar(500),
	
	`m__ddr_slot` tinyint(2) unsigned,
	`m__ddr_upTo` tinyint(2) unsigned,
	`m__ddr_bus` varchar(100),
	`m__ddr_comment` varchar(500),
	
	`m__184-pin_dimm_sockets_num` tinyint(2) unsigned,
	`m__184-pin_dimm_sockets_bus` tinyint(2) unsigned,
	`m__184-pin_dimm_sockets_upTo` tinyint(2) unsigned,
	`m__184-pin_dimm_sockets_supported-ram` tinyint(2) unsigned,
	`m__184-pin_dimm_sockets_v` tinyint(2) unsigned,
	
	`m__168-pin_dimm_sockets_num` tinyint(2) unsigned,
	`m__168-pin_dimm_sockets_bus` tinyint(2) unsigned,
	`m__168-pin_dimm_sockets_upTo` tinyint(2) unsigned,
	`m__168-pin_dimm_sockets_supported-ram` tinyint(2) unsigned,
	`m__168-pin_dimm_sockets_v` tinyint(2) unsigned,
	
	
	
	`m__upTo` tinyint(2) unsigned,
	`m__architecture` varchar(20),
	
	`m__unbuffered-ecc_memory_modules` tinyint(1) unsigned,
	`m__non-ecc_memory_modules` tinyint(1) unsigned,
	`m__xmp_memory_modules` tinyint(1) unsigned,
	`m__xmp_memory_modules_comment` tinyint(1) unsigned,
	
	/* ####################################################################################################### */
	
	`es__pcie_x16_16x_num` tinyint(2) unsigned,
	`es__pcie_x16_16x_name` varchar(20),
	`es__pcie_x16_16x_comment` varchar(500),
	
	`es__pcie_x16_8x_num` tinyint(2) unsigned,
	`es__pcie_x16_8x_name` varchar(20),
	`es__pcie_x16_8x_comment` varchar(500),
	
	`es__pcie_x16_4x_num` tinyint(2) unsigned,
	`es__pcie_x16_4x_name` varchar(20),
	`es__pcie_x16_4x_comment` varchar(500),
	`es__pcie_x16_comment` varchar(500),
	
	`es__pcie_x1_num` tinyint(2) unsigned,
	`es__pcie_x1_comment` varchar(500),
	
	`es__agp_8x_num` tinyint(2) unsigned,
	`es__agp_8x_ver` tinyint(2) unsigned,
	`es__agp_8x_comment` tinyint(2) unsigned,
	`es__agp_4x_num` tinyint(2) unsigned,
	`es__agp_4x_ver` tinyint(2) unsigned,
	`es__agp_4x_comment` tinyint(2) unsigned,
	`es__agp_2x_num` tinyint(2) unsigned,
	`es__agp_2x_ver` tinyint(2) unsigned,
	`es__agp_2x_comment` tinyint(2) unsigned,
	
	`es__pcx_` tinyint(2) unsigned,
	
	`es__pci_num` tinyint(2) unsigned,
	`es__pci_ver` varchar(3) unsigned,
	`es__pci_clock` varchar(5) unsigned,
	
	`es__amr(audio_modem_riser)` varchar(5) unsigned,
	`es__amr(reverse)` varchar(5) unsigned,
	
	
	`es__cnr(communication_networking_riser)` varchar(5) unsigned,
	
	
	
	/* ####################################################################################################### */
	
	`si__chip-1_sata_6Gb/s_connector_num` tinyint(2) unsigned,
	`si__chip-1_sata_6Gb/s_connector_ver` varchar(20),
	`si__chip-1_sata_6Gb/s_connector_upTo` varchar(20),
	`si__chip-1_sata_3Gb/s_connector_num` tinyint(2) unsigned,
	`si__chip-1_sata_3Gb/s_connector_ver` varchar(20),
	`si__chip-1_sata_3Gb/s_connector_upTo` varchar(20),
	`si__chip-1_raid_supp` varchar(50),
	`si__chip-1_raid_supp_comment` varchar(500),
	`si__chip-1_sas_3Gb/s_connector_num` tinyint(2) unsigned,
	`si__chip-1_sas_3Gb/s_connector_ver` varchar(20),
	`si__chip-1_sas_3Gb/s_connector_upTo` varchar(20),
	`si__chip-1_sas_3Gb/s_connector_comment` varchar(200),
	`si__chip-1_sas_3Gb/s_connector_raid_supp` varchar(50),
	`si__chip-2_name` varchar(50),
	`si__chip-2_num` tinyint(2),
	`si__chip-2_sata_6Gb/s_connector_num` tinyint(2) unsigned,
	`si__chip-2_sata_6Gb/s_connector_ver` varchar(20),
	`si__chip-2_sata_6Gb/s_connector_upTo` varchar(20),
	`si__chip-2_esata_6Gb/s_connector_num` tinyint(2) unsigned,
	`si__chip-2_esata_6Gb/s_connector_ver/info` varchar(50),
	`si__chip-2_esata_6Gb/s_connector_upTo` varchar(20),
	`si__chip-2_esata_6Gb/s_connector_comment` varchar(100),
	`si__chip-2_raid_supp` varchar(50),
	`si__chip-2_raid_supp_comment` varchar(500),
	`si__sata_6Gb/s_connector_num` tinyint(2) unsigned,
	`si__sata_3Gb/s_connector_num` tinyint(2) unsigned,
	`si__sas_3Gb/s_connector_num` tinyint(2) unsigned,
	`si__esata_6Gb/s_connector_num` tinyint(2) unsigned,
	
	/* ####################################################################################################### */
	
	`usb__chip-1_upTo` tinyint(2) unsigned,
	`usb__chip-1_ver` varchar(20),
	`usb__chip-1_port on the back panel` tinyint(2) unsigned,
	`usb__chip-1_port on the back panel_comment` varchar(200),
	`usb__chip-1_port available through the internal USB header` tinyint(2) unsigned,
	`usb__chip-2_name` varchar(50),
	`usb__chip-2_num` tinyint(2) unsigned,
	`usb__chip-2_upTo` tinyint(2) unsigned,
	`usb__chip-2_ver` varchar(20),
	`usb__chip-2_port on the back panel` tinyint(2) unsigned,
	`usb__chip-2_port available through the internal USB header` tinyint(2) unsigned,
	`usb__chip-2_comment` varchar(500),
	`usb__chip-3_name` varchar(50),
	`usb__chip-3_num` tinyint(2) unsigned,
	`usb__chip-3_upTo` tinyint(2) unsigned,
	`usb__chip-3_ver` varchar(20),
	`usb__chip-3_port on the back panel` tinyint(2) unsigned,
	`usb__chip-3_port available through the internal USB header` tinyint(2) unsigned,
	
	
	`usb__1.1` tinyint(2) unsigned,
	`usb__2.0` tinyint(2) unsigned,
	`usb__2.0/1.1` tinyint(2) unsigned,
	`usb__3.0/2.0` tinyint(2) unsigned,
	`usb__3.0` tinyint(2) unsigned,
	
	/* ####################################################################################################### */
	
	`iioc__24pin_atx_main_power_connector` tinyint(2) unsigned,
	`iioc__20pin_atx_power_connector` tinyint(2) unsigned,
	`iioc__8pin_atx_12v_power_connector` tinyint(2) unsigned,
	`iioc__4pin_atx_12v_power_connector` tinyint(2) unsigned,
	
	`iioc__pcie_power_connector` tinyint(2) unsigned,
	
	`iioc__sata_6gb/s_connector` tinyint(2) unsigned,
	`iioc__sata_3gb/s_connector` tinyint(2) unsigned,
	`iioc__sas_3gb/s_connector` tinyint(2) unsigned,
	`iioc__msata_connector` tinyint(2) unsigned,
	
	`iioc__cpu_fan_header` tinyint(2) unsigned,
	`iioc__system_fan_header` tinyint(2) unsigned,
	`iioc__cooling_fan_pin_header` tinyint(2) unsigned,
	
	`iioc__front_panel_header` tinyint(2) unsigned,
	`iioc__front_panel_audio_header` tinyint(2) unsigned,
	`iioc__s/pdif_out_header` tinyint(2) unsigned,
	`iioc__digital_microphone_header` tinyint(2) unsigned,
	`iioc__speaker_header` tinyint(2) unsigned,
	`iioc__aio_speaker_header` tinyint(2) unsigned,
	
	`iioc__usb_3.0/2.0_header` tinyint(2) unsigned,
	`iioc__usb_2.0/1.1_header` tinyint(2) unsigned,
	
	`iioc__ieee_1394a_header` tinyint(2) unsigned,
	`iioc__serial_port_header` tinyint(2) unsigned,
	`iioc__parallel_port` tinyint(2) unsigned,
	`iioc__chassis_intrusion_header` tinyint(2) unsigned,

	`iioc__lvds_drive_voltage_header` tinyint(2) unsigned,
	`iioc__lvds_connector` tinyint(2) unsigned,
	`iioc__flat_panel_display_power_header` tinyint(2) unsigned,
	`iioc__flat_panel_display_power_connector` tinyint(2) unsigned,
	`iioc__flat_panel_display_switch_header` tinyint(2) unsigned,
	`iioc__backlight_switch_header` tinyint(2) unsigned,
	`iioc__wifi_activity_indicator_led_header` tinyint(2) unsigned,
	
	`iioc__trusted_platform_module(tpm)_header` tinyint(2) unsigned,
	`iioc__onboard_voltage_measurement_module` tinyint(2) unsigned,
	`iioc__voltage_measurement_points` tinyint(2) unsigned,
	
	`iioc__clear_cmos_jumper` tinyint(2) unsigned,
	`iioc__power_button` tinyint(2) unsigned,
	`iioc__reset_button` tinyint(2) unsigned,
	`iioc__clear_cmos_button` tinyint(2) unsigned,
	`iioc__gear_button` tinyint(2) unsigned,
	`iioc__cpu_bclk_down_button` tinyint(2) unsigned,
	`iioc__cpu_bclk_up_button` tinyint(2) unsigned,
	`iioc__cpu_ratio_down_button` tinyint(2) unsigned,
	`iioc__cpu_ratio_up_button` tinyint(2) unsigned,
	`iioc__cpu_switch` tinyint(2) unsigned,
	`iioc__ln2_switch` tinyint(2) unsigned,
	
	`iioc__game/midi_connector` tinyint(2) unsigned,
	`iioc__fdd` tinyint(2) unsigned,
	`iioc__hdd` tinyint(2) unsigned,
	`iioc__irda` tinyint(2) unsigned,
	`iioc__irdA_tx/rx_header_ready` tinyint(2) unsigned,
	`iioc__com2` tinyint(2) unsigned,
	`iioc__udma_ata133/100/66_bus_master_ide_ports` tinyint(2) unsigned,
	`iioc__ata66/100_bus_master_ide_ports_on_board` tinyint(2) unsigned,
	
	`iioc__rj45_lan_port_on_board` tinyint(2) unsigned,
	`iioc__cd_audio_input_on_board` tinyint(2) unsigned,
	`iioc__front_usb_port_on_board` tinyint(2) unsigned,
	`iioc__intel_standard_front_panel` tinyint(2) unsigned,
	
	`iioc__joystick` tinyint(2) unsigned,
	`iioc__usb_ports_by_cable(optional_accessary)` tinyint(2) unsigned,
	`iioc__usb_ports_on_board` tinyint(2) unsigned,
	`iioc__com_port_by_cable(optional_accessary)` tinyint(2) unsigned,
	`iioc__vga(db15)` tinyint(2) unsigned,
	`iioc__fan_power_connectors` tinyint(2) unsigned,
	`iioc__game/midi` tinyint(2) unsigned,
	`iioc__gbt_standard_front_panel` tinyint(2) unsigned,
	`iioc__` tinyint(2) unsigned,
	`iioc__` tinyint(2) unsigned,
	`iioc__` tinyint(2) unsigned,
	`iioc__` tinyint(2) unsigned,
	`iioc__` tinyint(2) unsigned,
	`iioc__` tinyint(2) unsigned,
	`iioc__` tinyint(2) unsigned,
	`iioc__` tinyint(2) unsigned,
	
	/* ####################################################################################################### */
	
	`bpc__ps/2_keyboard_port` tinyint(2) unsigned,
	`bpc__ps/2_mouse_port` tinyint(2) unsigned,
	`bpc__ps/2_keyboard/mouse_port` tinyint(2) unsigned,
	
	`bpc__cpu_overclocking_button` tinyint(2) unsigned,
	`bpc__bios_switch_button` tinyint(2) unsigned,
	`bpc__clear_cmos_button` tinyint(2) unsigned,
	
	`bpc__ieee_1394a_port` tinyint(2) unsigned,
	
	`bpc__usb_3.0/2.0_port` tinyint(2) unsigned,
	`bpc__usb_2.0/1.1_port` tinyint(2) unsigned,
	
	`bpc__esata/usb_combo_connector` tinyint(2) unsigned,
	`bpc__esata_6Gb/s_connector` tinyint(2) unsigned,
	
	`bpc__rj-45_port` tinyint(2) unsigned,
	`bpc__rj-45_lan_port` tinyint(2) unsigned,
	
	`bpc__parallel_port` tinyint(2) unsigned,
	`bpc__serial_port` tinyint(2) unsigned,
	
	`bpc__optical_s/pdif_out_connector` tinyint(2) unsigned,
	`bpc__coaxial_s/pdif_out_connector` tinyint(2) unsigned,
	
	`bpc__dc-in_power_connector` tinyint(2) unsigned,
	
	`bpc__audio_jacks` tinyint(2) unsigned,
	`bpc__audio_jacks_line-in_port` tinyint(2) unsigned,
	`bpc__audio_jacks_line-out_port` tinyint(2) unsigned,
	`bpc__audio_jacks_line-mic_port` tinyint(2) unsigned,
	`bpc__audio_jacks_detail` varchar(200),
	
	`bpc__d-sub_port` tinyint(2) unsigned,
	`bpc__dvi-d_port` tinyint(2) unsigned,
	`bpc__hdmi_port` tinyint(2) unsigned,
	
	`bpc__display_port` tinyint(2) unsigned,
	`bpc__vga_port` tinyint(2) unsigned,
	`bpc__com_port` tinyint(2) unsigned,
	`bpc__lpt` tinyint(2) unsigned,
	
	/* ####################################################################################################### */
	
	`a__chip` varchar(50),
	`a__channel` decimal(2) unsigned,
	`a__hd_audio` tinyint(1) unsigned,
	`a__spdif_out` tinyint(1) unsigned,
	`a__dolby_home_theater` tinyint(1) unsigned,
	`a__eax®_advanced_hd_5.0` tinyint(1) unsigned,
	`a__x-fi_xtreme_fidelity®` tinyint(1) unsigned,
	
	/* ####################################################################################################### */
	
	`hwm__system_voltage_detection` tinyint(1) unsigned,
	`hwm__system_voltage_detect(vcore,vdd,vcc,+12v)` tinyint(1) unsigned,
	`hwm__system_health_status_auto-detect_and_report_by_bios` tinyint(1) unsigned,
	
	`hwm__cpu/system_temperature_detection` tinyint(1) unsigned,
	`hwm__cpu/system_fan_speed_detection` tinyint(1) unsigned,
	`hwm__cpu/system_fan_fail_warning` tinyint(1) unsigned,
	`hwm__cpu/system_fan_speed_control` tinyint(1) unsigned,
	`hwm__cpu/system_fan_speed_control_comment` tinyint(1) unsigned,
	
	`hwm__cpu/system_fan_revolution_and_temperature_detect` tinyint(1) unsigned,
	`hwm__cpu_overheating_warning` tinyint(1) unsigned,
	
	`hwm__h/w_detect_&_report_power-in_voltage,_cpu_voltage` tinyint(1) unsigned,
	`hwm__h/w_detect_&_report_power-in_voltage,_fan_speed` tinyint(1) unsigned,
	`hwm__h/w_detect_&_report_power-in_voltage,_cmos_battery_status` tinyint(1) unsigned,
	
	`hwm__auto_temperature_detect_and_thermal_shutdown_function` tinyint(1) unsigned,
	`hwm__stop_cpu_fan_when_entering_suspend_to_ram_mode` tinyint(1) unsigned,
	
	
	/* ####################################################################################################### */
	
	`power__includes` varchar(100),
	`power__acpi_states` tinyint(1) unsigned,
	`power__wake_up_from_s1_and_power_on_from_s5` tinyint(1) unsigned,
	`power__power-off_by_win98/me/2000/nt/xp_shut_down_and_switch` tinyint(1) unsigned,
	`power__power-on_by_lan,_rtc,_modem_&_switch` tinyint(1) unsigned,
	`power__` tinyint(1) unsigned,
	`power__` tinyint(1) unsigned,
	
	/* ####################################################################################################### */
	
	`uf__@bios` 					tinyint(1) unsigned,
	`uf__q-flash` 					tinyint(1) unsigned,
	`uf__xpress_bios_rescue` 		tinyint(1) unsigned,
	`uf__download_center` 			tinyint(1) unsigned,
	`uf__xpress_install` 			tinyint(1) unsigned,
	`uf__xpress_recovery2`			tinyint(1) unsigned,
	`uf__xpress_recovery`			tinyint(1) unsigned,
	`uf__easytune` 					tinyint(1) unsigned,
	`uf__easytune4` 				tinyint(1) unsigned,
	`uf__easytune3` 				tinyint(1) unsigned,
	`uf__easytune_comment` 			tinyint(1) unsigned,
	`uf__smart_6` 					tinyint(1) unsigned,
	`uf__extreme_hard_drive(x.h.d)` tinyint(1) unsigned,
	`uf__on/off_charge` 			tinyint(1) unsigned,
	`uf__cloud_oc` 					tinyint(1) unsigned,
	`uf__touchbios` 				tinyint(1) unsigned,
	`uf__3tb+_unlock` 				tinyint(1) unsigned,
	`uf__q_share` 					tinyint(1) unsigned,
	`uf__3d_power` 					tinyint(1) unsigned,
	
	`uf__suspend_to_ram(str)` 		tinyint(1) unsigned,
	
	
	`uf__wake_on-lan(wol)_&_internal/external_modem_ring_on` tinyint(1) unsigned,
	`uf__usb_keyboard_or_mouse_wake_up` tinyint(1) unsigned,
	`uf__` tinyint(1) unsigned,
	
	
	/* ####################################################################################################### */
	
	
	
	/* ####################################################################################################### */
	
	`bios__detail_1` varchar(100),
	`bios__detail_2` varchar(100),
	`bios__detail_3` varchar(100),
	`bios__detail_4` varchar(100),
	`bios__detail_5` varchar(100),
	
	`bios__2mbit_flash_rom` tinyint(1) unsigned,
	`bios__2mbit_flash_rom_award_bios` tinyint(1) unsigned,
	`bios__auto-detect_and_report_system_health_status` tinyint(1) unsigned,
	`bios__@bios_live_update_utility` tinyint(1) unsigned,
	`bios__@bios_live_update` tinyint(1) unsigned,
	
	`bios__cd-rom_bootable` tinyint(1) unsigned,
	`bios__scsi` tinyint(1) unsigned,
	`bios__ls120` tinyint(1) unsigned,
	`bios__ide#1~#4` tinyint(1) unsigned,
	`bios__ac_recovery_on/off_control` tinyint(1) unsigned,
	
	`bios__ami_bios_with_enhanced_acpi_feature_for_pc98/win98/win2000/me/xp_compliance` tinyint(1) unsigned,
	`bios__ami_bios_with_enhanced_acpi_feature_for_pc98/win98/win2000/me/xp_compliance,_green,_pnp,_dmi,_int13(>8.4GB)_and_anti-virus_functions` tinyint(1) unsigned,
	
	
	/*
	
	*/
	/* ####################################################################################################### */
	
	`bundle_software_1` varchar(100),
	`bundle_software_2` varchar(100),
	`bundle_software_3` varchar(100),
	`bundle_software_4` varchar(100),
	`bundle_software_5` varchar(100),
	`bundle_software_6` varchar(100),
	`bundle_software_7` varchar(100),
	`bundle_software_8` varchar(100),
	`bundle_software_9` varchar(100),
	`bundle_software_10` varchar(100),
	`bundle_software_11` varchar(100),
	`bundle_software_12` varchar(100),
	
	
	/* ####################################################################################################### */
	
	`driver_1` varchar(100),
	`driver_2` varchar(100),
	`driver_3` varchar(100),
	`driver_4` varchar(100),
	`driver_5` varchar(100),
	`driver_6` varchar(100),
	`driver_7` varchar(100),
	`driver_8` varchar(100),
	`driver_9` varchar(100),
	
	/* ####################################################################################################### */
	
	
	/* ####################################################################################################### */
	`LAN__chip_1` varchar(50),
	`LAN__chip_2` varchar(50),
	`WCM__detail_1` varchar(50),
	`WCM__detail_2` varchar(50),
	
	`Multi-Graphics Technology` varchar(200),
	
	`igp_IGP_d-sub_port` tinyint(2) unsigned,
	`igp_IGP_dvi-d_port_num` tinyint(2) unsigned,
	`igp_IGP_dvi-d_port_max_res` varchar(20),
	`igp_IGP_dvi-d_port_comment` varchar(400),
	`igp_IGP_hdmi_port_num` tinyint(2) unsigned,
	`igp_IGP_hdmi_port_max_res` varchar(20),
	`igp_IGP_displayport_num` tinyint(2) unsigned,
	`igp_IGP_displayport_max_res` varchar(20),
	`igp_chip-2_name` varchar(50),
	`igp_chip-2_thunderbolt_port_num` tinyint(2) unsigned,
	`igp_chip-2_thunderbolt_port_ver` varchar(40),
	`igp_chip-2_thunderbolt_port_max_res` varchar(20),
	`igp_chip-2_thunderbolt_port_supp_mini-displayport` varchar(10),
	`igp_chip-2_thunderbolt_port_supp_thunderbolt_monitor(s)` varchar(10),
	`igp_chip-2_thunderbolt_port_comment` varchar(400),
	
	
	`IEEE_1394_chip` varchar(20),
	`IEEE_1394_upTo` tinyint(2) unsigned,
	`IEEE_1394_ver` varchar(20),
	`IEEE_1394_port on the back panel` tinyint(2) unsigned,
	`IEEE_1394_port available through the internal IEEE 1394a header` tinyint(2) unsigned,
	
	`I/O Controller` varchar(50),
	`Operating System` varchar(200),
	`Form Factor` varchar(50),
	`Remark_1` varchar(500),
	`Remark_2` varchar(500),
	
	
	
	
	`img_1` varchar(100),
	`img_2` varchar(100),
	`img_3` varchar(100),
	`img_4` varchar(100),
	`img_5` varchar(100),
	`img_6` varchar(100),
	`img_7` varchar(100),
	`img_8` varchar(100),
	`img_9` varchar(100),
	`img_10` varchar(100),
	`img_brand` varchar(100),
	`img_chipset` varchar(100),
	`price` varchar(12),
	primary key (product_id)
);
ALTER TABLE motherboards ADD INDEX (product_id, motherboard_id);