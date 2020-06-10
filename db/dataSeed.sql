CREATE ROLE gnome WITH PASSWORD 'Gnomeo';

CREATE DATABASE gnomegrown WITH OWNER gnome;

\c gnomegrown;

-----------connection to specifitcation
CREATE TABLE max_height_at_base_age (
  id INT PRIMARY KEY,
  inches FLOAT, 
  cm FLOAT
);

CREATE TABLE mature_height (
  id INT PRIMARY KEY,
  inches FLOAT, 
  cm FLOAT
);

CREATE TABLE specifications (
  id INT PRIMARY KEY,
  toxicity VARCHAR, 
  shape_and_orientation VARCHAR,
  regrowth_rate VARCHAR,
  nitrogen_fixation VARCHAR,
  low_growing_grass VARCHAR,
  lifespan VARCHAR,
  leaf_retention VARCHAR,
  known_allelopath VARCHAR, 
  growth_rate VARCHAR,
  growth_period VARCHAR,
  growth_habit VARCHAR,
  growth_form VARCHAR,
  fire_resistance VARCHAR,
  fall_conspicuous VARCHAR,
  coppice_potential VARCHAR,
  c_n_ratio VARCHAR,
  bloat VARCHAR,
  max_height_at_base_age_id INT REFERENCES max_height_at_base_age(id),
  mature_height_id INT REFERENCES mature_height(id)
);


----------------connection to growth-----------------------
CREATE TABLE temperature_min (
  id INT PRIMARY KEY,
  deg_f FLOAT,
  deg_c FLOAT
);

CREATE TABLE root_depth_min (
  id INT PRIMARY KEY,
  inches FLOAT,
  cm FLOAT
);

CREATE TABLE precipitation_min (
  id INT PRIMARY KEY,
  inches FLOAT,
  cm FLOAT
);

CREATE TABLE precipitation_max (
  id INT PRIMARY KEY,
  inches FLOAT,
  cm FLOAT
);

CREATE TABLE planting_density_min (
  id INT PRIMARY KEY,
  sqm FLOAT,
  acre FLOAT
);

CREATE TABLE planting_density_max (
  id INT PRIMARY KEY,
  sqm FLOAT,
  acre FLOAT
);

CREATE TABLE growth (
  id INT PRIMARY KEY,
  ph_min FLOAT,
  ph_max FLOAT,
  moisture_use VARCHAR,
  frost_free_days_min VARCHAR,
  fertility_req VARCHAR,
  cold_stratification_req VARCHAR,
  shade_tolerance VARCHAR, 
  salinity_tolerance VARCHAR,
  hedge_tolerance VARCHAR,
  fire_tolerance VARCHAR,
  drought_tolerance VARCHAR,
  caco_3_tolerance VARCHAR,
  anaerobic_tolerance VARCHAR,
  temperature_min_id INT REFERENCES temperature_min(id),
  root_depth_min_id  INT REFERENCES root_depth_min(id),
  precipitation_min_id INT REFERENCES precipitation_min(id),
  precipitation_max_id INT REFERENCES precipitation_max(id),
  planting_density_min_id INT REFERENCES planting_density_min(id),
  planting_density_max_id INT REFERENCES planting_density_max(id)
);




-- --connection to M_S
CREATE TABLE flower (
  id INT PRIMARY KEY,
  color VARCHAR(20),
  conspicuous BOOLEAN
);

CREATE TABLE foliage (
  id INT PRIMARY KEY, 
  texture VARCHAR, 
  porosity_winter VARCHAR,
  porosity_summer VARCHAR,
  color VARCHAR
);

CREATE TABLE fruit_or_seed (
  id INT PRIMARY KEY,
  seed_persistance VARCHAR,
  seed_period_end VARCHAR(7),
  seed_period_begin VARCHAR(7),
  seed_abundance VARCHAR,
  conspicuous VARCHAR,
  color VARCHAR(20)
);

CREATE TABLE products (
  id INT PRIMARY KEY,
  veneer VARCHAR,
  pulpwood VARCHAR, 
  protein_potential VARCHAR,
  post VARCHAR,
  palatable_human VARCHAR, 
  palatable_grazing_animal VARCHAR,
  palatable_browse_animal VARCHAR,
  nursery_stock BOOLEAN,
  naval_store VARCHAR,
  lumber VARCHAR,
  fuelwood VARCHAR,
  fodder VARCHAR,
  christmas_tree VARCHAR,
  berry_nut_seed VARCHAR
);

CREATE TABLE propagation (
  id INT PRIMARY KEY,
  tubers BOOLEAN,
  sprigs BOOLEAN,
  sod BOOLEAN,
  seed BOOLEAN,
  cuttings BOOLEAN,
  corms BOOLEAN,
  container BOOLEAN,
  bulbs BOOLEAN,
  bare_root BOOLEAN
);

CREATE TABLE seed (
  id INT PRIMARY KEY,
  speed_spread_rate VARCHAR,
  vegetative_spread_rate VARCHAR,
  small_grain VARCHAR,
  seeds_per_pound INT,
  seedling_vigor VARCHAR(8),
  commercial_availability VARCHAR(20),
  bloom_period VARCHAR(7)
);

CREATE TABLE soils_adaptation (
  id INT PRIMARY KEY,
  fine BOOLEAN,
  medium BOOLEAN,
  coarse BOOLEAN
);


CREATE TABLE main_species (
  id INT PRIMARY KEY,
  scientific_name VARCHAR,
  ms_year VARCHAR(4),
  ms_type VARCHAR,
  ms_synonym VARCHAR, 
  ms_status VARCHAR, 
  slug VARCHAR, 
  is_main_species BOOLEAN,
  complete_data BOOLEAN,
  flower_id INT REFERENCES flower(id),
  foliage_id INT REFERENCES foliage(id),
  fruit_or_seed_id INT REFERENCES fruit_or_seed(id),
  growth_id INT REFERENCES growth(id),
  products_id INT REFERENCES products(id),
  propagation_id INT REFERENCES propagation(id), 
  seed_id INT REFERENCES seed(id),
  soils_adaptation_id INT REFERENCES soils_adaptation(id),
  specifications_id INT REFERENCES specifications(id)
);



-- connected to plant
CREATE TABLE class (
  id INT PRIMARY KEY,
  slug VARCHAR,
  class_name VARCHAR,
  link VARCHAR
);

CREATE TABLE division (
  id INT PRIMARY KEY,
  slug VARCHAR,
  division_name VARCHAR,
  link VARCHAR
);

CREATE TABLE genus (
  id INT PRIMARY KEY,
  slug VARCHAR,
  genus_name VARCHAR,
  link VARCHAR
);

CREATE TABLE family (
  id INT PRIMARY KEY,
  slug VARCHAR,
  family_name VARCHAR,
  link VARCHAR,
  family_common_name VARCHAR
);

CREATE TABLE orders (
  id INT PRIMARY KEY,
  slug VARCHAR,
  orders_name VARCHAR,
  link VARCHAR
);

---------

CREATE TABLE plant (
  id INT PRIMARY KEY, 
  native_status VARCHAR(50), 
  duration VARCHAR, 
  common_name VARCHAR(50),
  class_id INT REFERENCES class(id), 
  division_id  INT REFERENCES division(id), 
  family_id INT REFERENCES family(id), 
  genus_id INT REFERENCES genus(id), 
  main_species_id INT REFERENCES main_species(id), 
  order_id INT REFERENCES orders(id)
);

-- direct connection to P

CREATE TABLE images (
  id INT PRIMARY KEY, 
  image_url VARCHAR,
  plant_id INT REFERENCES plant(id)
);

CREATE TABLE varieties (
  id INT PRIMARY KEY,
  plant_id INT REFERENCES plant(id),
  varieties_name VARCHAR
);

CREATE TABLE hybrid (
  id INT PRIMARY KEY,
  plant_id INT REFERENCES plant(id),
  hybrid_name VARCHAR
);

CREATE TABLE forms (
  id INT PRIMARY KEY,
  plant_id INT REFERENCES plant(id),
  forms_name VARCHAR
);

CREATE TABLE cultivars (
  id INT PRIMARY KEY,
  plant_id INT REFERENCES plant(id),
  cultivars_name VARCHAR
);

