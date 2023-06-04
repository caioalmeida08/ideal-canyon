export default interface IScooter {
    scooter_model_short: string;
    scooter_model: string;
    scooter_year: number;
    scooter_color: string;
    scooter_max_speed: number;
    scooter_max_load: number;
    scooter_weight: number;
    scooter_dim_h: number;
    scooter_dim_w: number;
    scooter_dim_l: number;
    scooter_battery_type: string;
    scooter_battery_capacity: number;
    scooter_battery_range: number;
    scooter_charging_time: number;
    scooter_charging_power: number;
    scooter_charging_voltage: string;
    scooter_charging_output: number;
    scooter_description: string;
    scooter_price: number;
    scooter_all_colors: string[];
    other_scooter_models_short: string[];
    other_scooter_models: string[];
    scooter_imgs: string[];
}